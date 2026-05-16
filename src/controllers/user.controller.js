const userService = require('../services/user.service')

//Returns all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json({ success: true, data: users });

  } catch (error) {
   next(error.message)
    };
  }

//Returns users by id
const getUserById = async (req, res,next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
   next(error.message);
    }
  }

//Deletes user
const deleteMe = async (req, res, next) => {
  try {
    const result = await userService.deleteUser(req.user.userId);
    return res.status(200).json({ success: true, ...result });
  } catch (error) {
   next(error.message);
  }
};
//returns the logged in user's profile

const getMe = async ( req, res, next) => {
    try {
        const user = await userService.getProfile(req.user.userId);
        return res.status(200).json({
            success: true,
            data:user
        });
    } catch (error) {
     next(error.message);  
    }
};

const updateMe = async (req,res,next) => {
    try {
        const updated = await userService.updateProfile(req.user.userId,req.body);
        return res.status(200).json({
            success: true,
            data: updated
        });

    } catch (error) {
      next(error);  
    }
};

module.exports = {updateMe, getMe, deleteMe, getAllUsers, getUserById};