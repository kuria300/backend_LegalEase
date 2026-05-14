const Router = require("express");
const authController = require("../controllers/auth.controller");
const { authenticate } = require("../midlleware/auth.middleware");

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/send-otp", authController.sendOtp);
router.post("/verify-otp", authController.verifyOtp)
router.post('/logout', authenticate, authController.logout);

module.exports = router;