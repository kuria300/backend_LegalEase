const errorHandler = (err, req, res, next) =>{
    // this is inherited from Error class in ErrorObj.js when we super(err) shows where error happened line and file
    console.error(err.stack)

    return res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || "Something went wrong. Please try Again"
    })

}


module.exports= { errorHandler }