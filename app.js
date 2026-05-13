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
    app.use(session({
        secret: process.env.SESSION_SECRET || 'legalease_secret',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 24 * 60 * 60 * 1000, httpOnly: true }
    }))

    // ── Routes ────────────────────────────────────────────────
    app.use('/api/dashboard', dashboardRoutes)
    app.use('/api/chat', chatRoutes)
    app.use('/', userRoutes)
    app.use('/api/lawyer-dashboard', lawyerDashboardRoutes)
    app.use('/api/chat', chatRoutes)
    app.use('/', userRoutes)
    app.use('/api/admin',adminRoutes);

    app.use('/api/chat', chatRoutes)
    app.use('/',userRoutes)
    app.use("/api/bookings", bookingRoutes);

    // ── Error handler (must be last) ──────────────────────────
    app.use((req, res, next) => next(new ErrorResponse('Route not found', 404)))
    app.use(errorHandler)

    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`)
    })
}