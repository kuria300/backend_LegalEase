const express = require('express')
const session = require('express-session')
const cluster = require('node:cluster')
const cors = require('cors');
const os = require('os')
const process = require('node:process')
const { PORT, TZ , numLessCpus} = require('./src/config/appConfig')
const { errorHandler }= require('./src/middleware/errorHandler')
const ErrorResponse = require('./src/utils/ErrorObj')
// Chat routes and OpenAI connection test
const chatRoutes = require('./src/routes/chatRoutes')
const { testConnection } = require('./src/config/openai')
// Dashboard and admin routes
const dashboardRoutes = require('./src/routes/dashboardRoutes')
const lawyerDashboardRoutes = require('./src/routes/lawyerDashboardRoutes')
const adminRoutes = require('./src/routes/adminRoutes')
// User, booking and lawyer routes
const userRoutes = require('./src/routes/user.routes')
const bookingRoutes = require("./src/routes/booking.routes");
const lawyerRoutes = require('./src/routes/lawyerRoutes')
const lawyerMarketplaceRoutes = require("./src/routes/lawyerMarketplace.routes");
const lawyerProfile = require('./src/routes/lawyerProfileRoutes')
// M-Pesa payment routes
const getCallBack= require('./src/routes/callbackRoute')
const getCheckout = require('./src/routes/checkoutRoute')
const cookieParser = require('cookie-parser')
const authRoutes = require('./src/routes/auth.routes')
const getStatus = require('./src/routes/payStatus')

const documentRoutes = require('./src/routes/documentRoutes')
const { checkMessageLimit } = require('./src/middleware/messageLimit')

process.env.TZ= TZ

BigInt.prototype.toJSON = function () {
  return this.toString();
};

if(cluster.isPrimary){
  const totalCPUs = os.cpus().length;
  
  const numCPUsToUse = Math.max(1, os.cpus().length - numLessCpus);
  
  console.log(`Total CPUs: ${totalCPUs} will run ${numCPUsToUse} workers.`);

  // Test OpenAI connection on startup
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
    
    // TODO update later to our frontend origin
    const corsOptions={
      origin: ["http://localhost:5173", "http://127.0.0.1:5173"]
    }
    app.use(cors(corsOptions))

    app.use(express.json());
    app.use(express.urlencoded({extended: true}))
    app.use(cookieParser())

    // express-session is required by messageLimit.js to track how many messages a guest user has sent
    // without it req.session is undefined and the server crashes
    app.use(session({
        secret: process.env.SESSION_SECRET || 'legalease_secret',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 24 * 60 * 60 * 1000, httpOnly: true }
    }))

    app.use(checkMessageLimit)

    // Debug logger - logs every incoming request method and URL
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next();
    });

    // routes
    app.use('/api/documents', documentRoutes)
    app.use('/api/chat', chatRoutes)
    app.use('/api/dashboard', dashboardRoutes)
    app.use('/api/lawyer-dashboard', lawyerDashboardRoutes)
    app.use('/api/admin', adminRoutes)
    app.use('/api/bookings', bookingRoutes)
    app.use('/api/lawyer', lawyerRoutes)
    app.use('/api/lawyers', lawyerMarketplaceRoutes)
    app.use('/api/user', userRoutes)
    app.use('/api/auth', authRoutes)
    app.use('/api/lawyerProfile', lawyerProfile)

    // M-Pesa Routes
    app.use('/payments/callback', getCallBack)
    app.use('/checkout', getCheckout)
    app.use('/check-status', getStatus)

    // Health check route to verify the server is running, useful for monitoring and frontend connectivity checks
    app.get('/api/health', (req, res) => {
        res.json({ status: 'OK', message: 'LegalEase API running', timestamp: new Date().toISOString() });
    })

    //Error handler (must be last)
    app.use((req, res, next) => next(new ErrorResponse('Route not found', 404)))
    app.use(errorHandler)

    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`)
    })
}
