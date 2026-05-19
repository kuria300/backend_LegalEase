const authService = require('../services/auth.service');

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 30 * 60 * 1000
};


//Registering new user
//POST/register
const register = async (req, res, next) => {
    try {
        const result = await authService.register(req.body);
        return res.status(201).json({ success: true, ...result});
    } catch (error) {
        next(error.message);
    }
};

const login = async (req, res, next) => {
    try {
        const result = await authService.login(req.body);

        return res.status(200).json({ success: true, ...result});
    } catch (error) {
        next(error);
    }
};

const logout = ( req, res) => { 
    res.clearCookie('token', COOKIE_OPTIONS);
    return res.status(200).json({
        success: true,
        message: "Logged out successfully."
    })
}

const sendOtp = async (req, res,next) => {
  try {
    const result = await authService.sendOtp(req.body);
    return res.status(200).json({ success: true, ...result });
  } catch (error) {
    next(error)
  }
};

 
//Router to verify otp
const verifyOtp = async (req, res, next) => {
    try {
        const result = await authService.verifyOtp(req.body);

        // JWT goes into cookie only — never exposed in response body
        res.cookie('token', result.token, COOKIE_OPTIONS);

        // return role
        return res.status(200).json({
            success:   true,
            message:   "Logged in successfully.",
            role:      result.role
        });
    } catch (error) {
        next(error);
    }
};
const forgotPassword = async (req, res, next) => {
    try {
        const result = await authService.forgotPassword(req.body);
        return res.status(200).json({ success: true, ...result });
    } catch (error) {
        next(error);
    }
};

module.exports = { login, register, logout, sendOtp, verifyOtp, forgotPassword };
