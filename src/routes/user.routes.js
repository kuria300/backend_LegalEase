const {Router} = require("express");
const { authenticate, authorise } = require('../middleware/auth.middleware')
const userController = require('../controllers/user.controller')

const router = Router();

//All user routes are protected
router.get("/getProfile", authenticate, userController.getMe);
router.put("/updateProfile", authenticate, userController.updateMe);
router.delete("/deleteProfile", authenticate, userController.deleteMe);

//Admin routes
router.get("/", authenticate, authorise("ADMIN"), userController.getAllUsers);
router.get("/:id", authenticate, authorise("ADMIN"), userController.getUserById);

module.exports = { router };