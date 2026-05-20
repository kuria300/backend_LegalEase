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
        next(error);
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

        // return role
        return res.status(200).json({
            success:   true,
            message:   "Logged in successfully.",
            token: result.token,
            role:      result.role,
            email:     result.email,
            name:      result.first_name
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

const getUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user
  });
};

module.exports = { login, register, logout, sendOtp, verifyOtp, forgotPassword, getUser };
