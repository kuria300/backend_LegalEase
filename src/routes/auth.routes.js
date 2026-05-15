const { Router }   = require('express');
const authController = require('../controllers/auth.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { validate, registerSchema, loginSchema, otpSchema } = require('../middleware/validate.middleware');

const router = Router();

router.post('/register',   validate(registerSchema), authController.register);
router.post('/verify-email', validate(otpSchema), authController.verifyEmail)
router.post('/login',      validate(loginSchema),    authController.login);
router.post('/send-otp',                             authController.sendOtp);
router.post('/verify-otp', validate(otpSchema),      authController.verifyOtp);
router.post('/logout',     authenticate,             authController.logout);

module.exports = router;