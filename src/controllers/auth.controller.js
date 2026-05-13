const authService = require('../services/auth.service');


//Registering new user
//POST/register

const register = async (req, res) => {
    try {
        const result = await authService.register(req.body);
        return res.status(201).json({ success: true, ...result});
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Registration failed."
        });
    }
};

const login = async (req, res) => {
    try {
        const result = await authService.login(req.body);
        return res.status(200).json({ success: true, ...result});
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Login failed."
        });
    }
};


module.exports = {login, register};
