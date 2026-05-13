const { db } = require("../config/db")

//Find user by email address
const findByEmail = (email) => {
    return prisma.users.findUnique({where: {email}});
};

//find user by uuid
const findById = ( id ) => {
    return db.users.findUnique({
        where: { id },
        select: {
            id: true,
            first_name: true,
            second_name: true,
            email: true,
            role: true,
            dob: true,
            created_at: true,
        },
    });
};

//find all users
const findAllUsers = () => {
    return db.users.findMany({
        where: {deleted_at: null},
        select:{
            id : true,
            first_name: true,
            second_name:true,
            email: true,
            role: true,
            created_at: true
        }
    })
}

//Create a new record
const createUser = (data) =>{
    return db.users.create({ data });
};

//Update a user's basic profile fields
const updateUser = ( id, data ) => {
    return db.users.update({
        where: { id },
        data,
        select: { 
            id: true,
            first_name: true,
            second_name: true,
            email: true,
            role: true,
            dob: true
        }
    })
}

//Save a hashed OTP and its expiry timestamp
const saveOtp = ( id, otpHash, otpExpiry) => {
    return db.users.update({
        where:{id},
        data: {otp_hash: otpHash, otp_expires_at:otpExpiry},
    });
};

//Clears otp after successful deletion
const clearOtp = (id) => {
    return db.users.update({
        where: {id},
        data: {otp_hash:null, otp_expires_at: null},
    });
};


//Soft deleting a user by stamping deleted_at
//doesnt remove the row from the database
const HardDeleteUser = (id) => {
    return db.users.delete({
        where: {id}
    });
};

module.exports = {HardDeleteUser, clearOtp, saveOtp, updateUser, createUser, findByEmail, findById, findAllUsers};