const { db } = require("../config/db")


const markVerified = (id) => {
    return db.users.update({
        where: { id },
        data: { 
            is_verified: true,
            otp_hash: null,        // clear OTP at the same time
            otp_expires_at: null
        }
    });
};

//Find user by email address
const findByEmail = (email) => {
    return db.users.findUnique({where: {email},
        select: {
            id:             true,
            email:          true,
            role:           true,
            otp_hash:       true,
            otp_expires_at: true,
            login_attempts: true,
            locked_until : true
        }
    });
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

const incrementLoginAttempts = (id) => {
    return db.users.update({
        where: { id },
        data: {
            login_attempts: { increment: 1 }
        }
    });
};

const lockAccount = (id) => {
    return db.users.update({
        where: { id },
        data: {
            locked_until:   new Date(Date.now() + 10 * 60 * 1000),
            login_attempts: 0
        }
    });
};

const clearLoginAttempts = (id) => {
    return db.users.update({
        where: { id },
        data: {
            login_attempts: 0,
            locked_until:   null
        }
    });
};

module.exports = {HardDeleteUser,
     clearOtp,
      saveOtp,
       updateUser,
        createUser,
         findByEmail,
          findById,
           findAllUsers,
            markVerified,
             lockAccount,
              incrementLoginAttempts,
               clearLoginAttempts};