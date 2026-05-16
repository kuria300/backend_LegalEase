//This file allows to limit the number of messages a user can send in a certain time frame

const ErrorResponse = require('../utils/ErrorObj.js');

const MESSAGE_LIMIT = 4;

//The function takes in the request, response and next function as parameters and checks 
// if the user has sent too many messages in a certain time frame. If they have, it returns an error response. If not, 
// it calls the next function to continue processing the request.

const checkMessageLimit = (req, res, next) => {
    //I'll use try catch block to handle any errors that may occur during the execution of the function
    try {
        // Check if req.body exists before destructuring to handle multipart/form-data requests
        // where body is undefined until multer parses it
        const userId = req.body ? req.body.userId : undefined; // Get the user ID from the request body

        if (userId) return next(); // If the user ID is present, continue processing the request

        if (!req.session.messageCount) {
            req.session.messageCount = 0; // Initialize message count if it doesn't exist
        }
        // Increment the message count for the session
        req.session.messageCount += 1;

        // Check if the message count exceeds the limit (e.g., 5 messages)
        if (req.session.messageCount > MESSAGE_LIMIT) {
            throw new ErrorResponse(`You have reached ${MESSAGE_LIMIT} message limit. Please register or login to continue.`, 403); // Throw an error if the limit is exceeded
        }

        req.remainingMessages = MESSAGE_LIMIT - req.session.messageCount; // Calculate remaining messages
        next(); // Continue processing the request
    } catch (err) {
        next(err); // Pass the error to the next middleware
    }
};

module.exports = { checkMessageLimit };