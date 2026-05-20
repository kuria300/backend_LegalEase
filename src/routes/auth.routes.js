const { Router }   = require('express');
const authController = require('../controllers/auth.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { validate, registerSchema, loginSchema, otpSchema } = require('../middleware/validate.middleware');

const router = Router();

router.post("/register",validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);
router.post("/send-otp", authController.sendOtp);
router.post("/verify-otp",validate(otpSchema), authController.verifyOtp);
router.post("/forgot-password", authController.forgotPassword);
router.post('/logout', authenticate, authController.logout);
router.get('/session/me', authenticate, authController.getUser);

module.exports = router;