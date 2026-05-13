const { db } = require('../config/db');

//create a new password record linked to a user
const createPassword = (userId, hashedPassword) => {
    return db.passwords.create({
        data: {
            user_id: userId,
            password: hashedPassword
        },
    });
};

//Retrieve a user's password for comparison during login
const findByUserId = (userId) => {
    return db.passwords.findUnique({where: {user_id: userId}});
};

//Update password
const updatePassword = ( userId, hashedPassword )=> {
    return db.passwords.update({
        where:{ user_id: userId},
        data: {password: hashedPassword},
    });
};


module.exports = { findByUserId, updatePassword, createPassword};