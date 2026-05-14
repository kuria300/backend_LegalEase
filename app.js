const express = require('express')
const session = require('express-session')
const cluster = require('node:cluster')
const os = require('os')
const process = require('node:process')
const { PORT, TZ , numLessCpus} = require('./src/config/appConfig')
const { errorHandler }= require('./src/middleware/errorHandler')
const ErrorResponse = require('./src/utils/ErrorObj')
const dashboardRoutes = require('./src/routes/dashboardRoutes')
const lawyerDashboardRoutes = require('./src/routes/lawyerDashboardRoutes')
const adminRoutes = require('./src/routes/adminRoutes')
const { chatRoutes, testConnection } = require('./ai')
const userRoutes = require('./src/routes/user.routes')
const bookingRoutes = require("./src/routes/booking.routes");
const lawyerMarketplaceRoutes = require("./src/routes/lawyerMarketplace.routes");
const lawyerProfile = require('./src/routes/lawyerProfileRoutes')
const getCallBack= require('./src/routes/callbackRoute')
const getCheckout = require('./src/routes/checkoutRoute')
const cookieParser = require('cookie-parser')
const authRoutes = require('./src/routes/auth.routes')
const getStatus = require('./src/routes/payStatus')

process.env.TZ= TZ

BigInt.prototype.toJSON = function () {
  return this.toString();
};

if(cluster.isPrimary){
  const totalCPUs = os.cpus().length;
  const numCPUsToUse = Math.max(1, os.cpus().length - numLessCpus);
  
  console.log(`Total CPUs: ${totalCPUs} will run ${numCPUsToUse} workers.`);
  testConnection();
  
  for( let i=0; i< numCPUsToUse ; i++){
    cluster.fork()
  }
  cluster.on('exit', (worker)=>{
    console.log(`Worker ${worker.process.pid} down. Replacing...`);
    cluster.fork();
  })

}else{
    const app= express()
    app.use(express.json());
    app.use(express.urlencoded({extended: true}))
    app.use(cookieParser())
    app.use(session({
        secret: process.env.SESSION_SECRET || 'legalease_secret',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 24 * 60 * 60 * 1000, httpOnly: true }
    }))

    // routes
    const documentRoutes = require('./src/routes/documentRoutes')
    app.use('/api/documents', documentRoutes)
    app.use('/api/chat', chatRoutes)
    app.use('/api/dashboard', dashboardRoutes)
    app.use('/api/lawyer-dashboard', lawyerDashboardRoutes)
    app.use('/api/chat', chatRoutes)
    app.use('/api/admin',adminRoutes);
    app.use("/api/bookings", bookingRoutes);
    app.use ("/api/lawyers", lawyerMarketplaceRoutes);

    app.use('/api/chat', chatRoutes)
    app.use('/api/user',userRoutes)
    app.use('/api/auth', authRoutes)
    app.use("/api/bookings", bookingRoutes);
    app.use("/api/lawyerProfile", lawyerProfile)
    // ── Error handler (must be last) ──────────────────────────

    // mpeesa Routes
    app.use('/payments/callback', getCallBack)
    app.use('/checkout', getCheckout)
    app.use('/check-status', getStatus)

    app.use((req, res, next) => next(new ErrorResponse('Route not found', 404)))
    app.use(errorHandler)

    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`)
    })
}