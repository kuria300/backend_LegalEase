require('dotenv').config();
const { verifyToken } = require("../utils/jwt.utils");
const ErrorResponse = require("../utils/ErrorObj");


//Verifes the JWT in the authorization header
//on success , attaches decoded payload to req.user on failure, returns 401
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith('Bearer')) {
        return next(new ErrorResponse('No token provided', 401))
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = verifyToken(token)
        req.user = decoded
        next()
    } catch (error) {
        return next(new ErrorResponse('Invalid or expired token. Please log in again', 401));
    }
}

//Restricts a route to a specific role
const authorise = (...Role) => {
    return (req, res, next) => {
        if (!Role.includes(req.user.role)){
            return next(new ErrorResponse('You do not have permission to access this resource', 403));
        }
        next();
    };
};

module.exports = { authenticate, authorise}
