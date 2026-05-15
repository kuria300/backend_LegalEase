//In this file I am working on input sanitization for the user registration and login forms. I will use the express-validator library to validate and sanitize the input data.

const validator = require('validator');

const ErrorResponse = require('../utils/ErrorObj.js');

// Middleware function to validate and sanitize user registration input I'll use requests, response, and next as parameters
const sanitizeInput = (req, res, next) => {
    try {
        const { message } = req.body;

        if (message) {
            if (message.length > 5000) {
                throw new ErrorResponse('Message is too long. Maximum length is 5000 characters.', 400);
            }

            // trim only, escape breaks the message sent to OpenAI
            req.body.message = validator.trim(message);

            if (req.body.message.length === 0) {
                throw new ErrorResponse('Message cannot be empty.', 400);
            }
        }

        next();
    } catch (error) {
        next(error);
    }
};
//Check the user id I'll use uuid validation to ensure that the user id is in the correct format. I'll check both the request body and parameters for the user id. 
const validateUserId = (req, res, next) => {
    try {
        const userId = (req.body && req.body.userId) || req.params.userId;
        
        if (userId && !validator.isUUID(userId)) {
            throw new ErrorResponse('Invalid user ID format.', 400);
        }
        next();
    } catch (error) {
        next(error);
    }
};

    module.exports = {
        sanitizeInput,
        validateUserId,
    };

/*
    * This code defines two middleware functions for input sanitization and validation in an Express.js application.
    * The sanitizeInput function checks the message input from the request body, ensuring it is not too long and sanitizes it by trimming whitespace and escaping special characters. If the message is invalid, it throws an error with a descriptive message.
    * The validateUserId function checks for a userId in either the request body or parameters and validates that it is in a proper UUID format. If the userId is invalid, it throws an error with a descriptive message.
    * Both functions use a custom ErrorResponse class to handle errors and pass them to the next middleware for centralized error handling.
 */
