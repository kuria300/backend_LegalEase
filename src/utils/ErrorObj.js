// this extends the Error class and shapes the error to be passed to errorHandler middleware
class ErrorResponse extends Error {
    constructor(err= "Something went wrong.Please try again", statusCode= 500){
        super(err)
        this.statusCode= statusCode
    }
}

module.exports= ErrorResponse