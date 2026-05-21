const {Router} = require("express");
const { authenticate, authorise } = require('../middleware/auth.middleware')
const userController = require('../controllers/user.controller')

const router = Router();

//All user routes are protected
router.get("/get", authenticate, userController.getMe);
router.put("/update", authenticate, userController.updateMe);
router.delete("/delete", authenticate, userController.deleteMe);


module.exports = router;



