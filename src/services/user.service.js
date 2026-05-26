const userRepo = require('../repositories/user.repository');
const ErrorResponse = require('../utils/ErrorObj');

//Get all users- Admin only
const getAllUsers = async () => {
    return userRepo.findAllUsers();
};

//Get user by id -Admin only

const getUserById = async (userId) => {
    const user = await userRepo.findById(userId);
    if (!user) {
        throw new ErrorResponse("User not found", 404, "USER_NOT_FOUND")
    }
    return user;
}


//Returns the logged-in user's profile
const getProfile = async ( userId ) => {
    const user = await userRepo.findById(userId);
    if (!user) {
        throw new ErrorResponse("User not found", 404, "USER_NOT_FOUND");
}
    return user
};

//update the logged-in user profile
const updateProfile = async (userId, data) => {
    const allowedFields = ["first_name", "second_name", "email", "dob"];
    const updateData = {};

    //loop through the allowed fields
    for (const field of allowedFields) {
        if (data[field] !== undefined) {
            updateData[field] = field === "dob" ? new Date(data[field]) : data[field];
        }
    }

    if (Object.keys(updateData).length === 0){
        throw new ErrorResponse("No valid fields provided to update", 400,"NO_VALID_FIELDS")
    }
    return userRepo.updateUser(userId, updateData);
};

const deleteUser = async (userId) => {
    await userRepo.HardDeleteUser(userId);
    return {message: "Account deleted successfully."}
}


module.exports = { updateProfile, getProfile , getAllUsers, getUserById, deleteUser};