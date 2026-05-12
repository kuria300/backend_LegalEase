const userService = require('../services/user.service')

//Returns all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to fetch users.",
    });
  }
};

//Returns users by id
const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to fetch user.",
    });
  }
};

//Deletes user
const deleteMe = async (req, res) => {
  try {
    const result = await userService.deleteAccount(req.user.userId);
    return res.status(200).json({ success: true, ...result });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to delete account.",
    });
  }
};

//returns the logged in user's profile

const getMe = async ( req, res) => {
    try {
        const user = await userService.getProfile(req.user.userId);
        return res.status(200).json({
            success: true,
            data:user
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Failed to fetch profile.",
        });   
    }
};

const updateMe = async (req,res) => {
    try {
        const updated = await userService.updateProfile(req.user.userId,req.body);
        return res.status(200).json({
            success: true,
            data: updated
        });

    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Failed to update profile.",
        });
        
    }
};

module.exports = {updateMe, getMe, deleteMe, getAllUsers, getUserById};