require('dotenv').config();
const jwt = require('jsonwebtoken');


//Signs a JWT containing the user's id and role.
const signToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

//Verifies a JWT and returns its deoced payload
const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { signToken, verifyToken };
