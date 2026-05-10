// Used multer for handling file uploads from the client- side form to a server.
const multer = require('multer');
const ErrorResponse = require('../utils/errorObj.js'); // Custom error response class for handling errors in the application

// Set up multer storage configuration to store uploaded files in memory (you can also configure it to store files on disk if needed)

const  storage = multer.memoryStorage();

//let me use file filter to allow only images and documents to be uploaded
//cb is a callback function that takes two arguments: an error object (if any) and a boolean value indicating whether to accept the file or not.
//rq is the request object, file is the file being uploaded.
/*
This file filter checks the MIME type of the uploaded file against a list of allowed types (PDF, Word documents, JPEG and PNG images).
If the file's MIME type is in the allowedTypes array, it calls the callback with null (indicating no error) and true (indicating that the file should be accepted).
If the MIME type is not allowed, it calls the callback with an error message and false (indicating that the file should be rejected).
*/

const fileFilter = (req, file, cb) => {
    const allowedTypes = [ "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png",  ]; 
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Accept the file if its MIME type is in the allowedTypes array
    }
    else {
        cb(new ErrorResponse("Invalid file type. Only PDF, Word documents, JPEG and PNG images are allowed.", 400), false); // Reject the file if its MIME type is not in the allowedTypes array
    }
};

// Set up multer middleware with the defined storage, file filter, and file size limit (10MB in this case you can adjust this limit as needed)
const upload = multer({ 
    storage, 
    fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit increase if needed
 });

 // Middleware to handle multer errors and pass them to the next error handling middleware
 const handleMulterError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        // Handle Multer-specific errors such as file size limit exceeded or invalid file type 
        if (err.code === 'LIMIT_FILE_SIZE') {
            return next(new ErrorResponse("File size exceeds the limit of 10MB.", 400)); // Handle file size limit error
        }   else {
        return next(new ErrorResponse(err.message, 400)); // Handle other Multer errors (e.g., invalid file type)
    }
}
    // Pass other errors to the next middleware for handling (e.g., file type errors from the fileFilter)
    next(err);
};

module.exports = {
    upload,
    handleMulterError
};

/*
    * This code sets up a file upload middleware using the multer library.
    *  It defines a storage configuration that stores uploaded files in memory, and a file filter that allows only specific MIME types (PDF, Word documents, JPEG and PNG images).
    *  The middleware also includes error handling for multer-specific errors, such as file size limits. 
    * The upload middleware can be used in routes to handle file uploads from client-side forms.
 */

//THE FOLLOWING INSTALLATION ARE MADE IN THIS FILE
/*
    * npm install multer
*/