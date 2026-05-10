require('dotenv').config();
import jwt from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.utils";

//Verifes the JWT in the authorization header
//on success , attaches decoded payload to req.user on failure, returns 401
export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith('Bearer')) {
        return res.status(401).json({success:false, message: 'No token provided' })
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = verifyToken(token)
        req.user = decoded
        next()
    } catch {
        return res.status(401).json({success:false, message: 'Invalid or expired token.Please log in again'})
    }
}

//Restricts a route to a specific role
export const authorise = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)){
            return res.status(403).json({
                success:false,
                message:"You do not have permission to access this resource"
            });
        }
        next();
    };
};