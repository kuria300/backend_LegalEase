require('dotenv').config();
import jwt from "jsonwebtoken";


//Signs a JWT containing the user's id and role.
export const singToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

//Verifies a JWT and returns its deoced payload
export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};
