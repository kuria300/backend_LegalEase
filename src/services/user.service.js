const userRepo = require('../repositories/user.repository')

//Get all users- Admin only
const getAllUsers = async () => {
    return userRepo.findAllUsers();
};

//Get user by id -Admin only

const getUserById = async (userId) => {
    const user = await userRepo.findById(userId);
    if (!user) {
        const error = new Error("User not found.");
        error.statusCode = 404;
        throw error;
    }
    return user;
}


//Returns the logged-in user's profile
const getProfile = async ( userId ) => {
    const user = await userRepo.findById(userId);
    if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        throw error;
    }
    return user;
};

//update the logged-in user profile
const updateProfile = async (userId, data) => {
    const allowedFields = ["first_name", "second_name", "dob"];
    const updateData = {};

    //loop through the allowed fields
    for (const field of allowedFields) {
        if (data[field] !== undefined) {
            updateData[field] = field === "dob" ? new Date(data[field]) : data[field];
        }
    }

    if (Object.keys(updateData).length === 0){
        const error = new Error( "No valid fields provided to update.");
        error.statusCode = 400;
        throw error;
    }
    return userRepo.updateUser(userId, updateData);
};

const deleteUser = async (userId) => {
    await userRepo.softDeleteUser(userId);
    return {message: "Account deleted successfully."}
}


module.exports = { updateProfile, getProfile , getAllUsers, getUserById, deleteUser};