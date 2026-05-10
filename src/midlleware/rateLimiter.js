//This file allows to limit the number of requests a user can make in a certain time frame
/*]
 * Controls how many chat messages can be sent from one IP address. I set it to 50 requests per 15 minutes, This prevents:
a) Spamming the ai with 1000 messages
b) DDoS attacks by overwhelming the server with too many requests

 */
const rateLimit = require('express-rate-limit');
const ErrorResponse = require('../utils/ErrorObj.js');

//so a constant that defines the rate limit, in this case 50 requests per 15 minutes
const chatLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,//this is calculation for 15 minutes in milliseconds
    max: 50, //limit of 50 requests per windowMs (you can adjust this number based on your needs)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: (req, res, next) => {
        // This function is called when a user exceeds the rate limit
        next(new ErrorResponse('Too many requests, please try again after 15 minutes.', 429));
    },
});

//this deals with the limit to uploading files
const uploadLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit of 10 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res, next) => {
        // This function is called when a user exceeds the rate limit
        next(new ErrorResponse('Too many requests, please try again after 15 minutes.', 429));
    },
});

module.exports = {
    chatLimiter,
    uploadLimiter,
};

    