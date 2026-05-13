const express = require('express')
const session = require('express-session')

const cluster = require('node:cluster')
const os = require('os')
const process = require('node:process')
const { PORT, TZ , numLessCpus} = require('./src/config/appConfig')
const { errorHandler }= require('./src/middleware/errorHandler')
const ErrorResponse = require('./src/utils/ErrorObj')
const adminRoutes = require('./src/routes/adminRoutes')
const { chatRoutes, testConnection } = require('./ai')
const userRoutes = require('./src/routes/user.routes')

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

//   console.log(new Date(new Date().getTime()).toString());

  cluster.on('exit', (worker)=>{
    console.log(`Worker ${worker.process.pid} down. Replacing...`);
    cluster.fork();
  })



}else{

    const app= express()
    app.use(express.json());
    app.use(express.urlencoded({extended: true}))
    app.use(session({
        // express-session is required by messageLimit.js to track how many messages a guest user has sent
        // without it req.session is undefined and the server crashes
        secret: process.env.SESSION_SECRET || 'legalease_secret',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 24 * 60 * 60 * 1000, httpOnly: true }
    }))

    app.use('/api/admin',adminRoutes);

    app.use('/api/chat', chatRoutes)
    app.use('/',userRoutes)

    app.use((req, res, next) => next(new ErrorResponse('Route not found', 404)))
    app.use(errorHandler)

    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`)
    })
}
