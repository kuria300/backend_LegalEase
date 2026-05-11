const {Router} = require("express");
const { authenticate, authorise } = require('../midlleware/auth.middleware')
const userController = require('../controllers/user.controller')

const router = Router();

//All user routes are protected
router.get("/me", authenticate, userController.getMe);
router.put("/me", authenticate, userController.updateMe);
router.delete("/me", authenticate, userController.deleteMe);

//Admin routes
router.get("/", authenticate, authorise("ADMIN"), userController.getAllUsers);
router.get("/:id", authenticate, authorise("ADMIN"), userController.getUserById);

module.exports = { router };