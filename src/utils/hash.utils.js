const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;


//Hash any plain string value
const hashValue = async(value) => {
    return bcrypt.hash(value, SALT_ROUNDS);
};


//Compare a plain value against a stored hash
const compareValue = async (value, hash) => {
    return bcrypt.compare(value, hash);
};

module.exports = { hashValue, compareValue};