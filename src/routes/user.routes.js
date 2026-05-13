const {Router} = require("express");
const { authenticate, authorise } = require('../midlleware/auth.middleware')
const userController = require('../controllers/user.controller')

const router = Router();

//All user routes are protected
router.get("/get", authenticate, userController.getMe);
router.put("/update", authenticate, userController.updateMe);
router.delete("/delete", authenticate, userController.deleteMe);

//Admin routes
router.get("/getAll", authenticate, authorise("ADMIN"), userController.getAllUsers);
router.get("/:id", authenticate, authorise("ADMIN"), userController.getUserById);

module.exports = router;



