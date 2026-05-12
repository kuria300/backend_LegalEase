const express = require('express')
const cluster = require('node:cluster')
const os = require('os')
const process = require('node:process')
const { PORT, TZ , numLessCpus} = require('./src/config/appConfig')
const { errorHandler }= require('./src/middleware/errorHandler')
const ErrorResponse = require('./src/utils/ErrorObj')

process.env.TZ= TZ


BigInt.prototype.toJSON = function () {
  return this.toString();
};

if(cluster.isPrimary){
  const totalCPUs = os.cpus().length;
  
  const numCPUsToUse = Math.max(1, os.cpus().length - numLessCpus);
  
  console.log(`Total CPUs: ${totalCPUs} will run ${numCPUsToUse} workers.`);

  
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


    app.use((req, res, next) => next(new ErrorResponse('Route not found', 404)))
    app.use(errorHandler)

    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`)
    })
}