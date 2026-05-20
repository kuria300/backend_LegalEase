require('dotenv').config();
const userRepo     = require('../repositories/user.repository');
const passwordRepo = require('../repositories/password.repository');
const { hashValue, compareValue }= require('../utils/hash.utils');
const { signToken }= require('../utils/jwt.utils');
const { generateOtp, otpExpiresAt, sendOtpEmail } = require('../utils/otp.utils');
const { db }= require('../config/db');
const ErrorResponse=require('../utils/ErrorObj')


// ── Register 
// Creates user + password in a transaction, then sends OTP
const register = async ({ first_name, second_name, email, password,role, dob }) => {
    const existing = await userRepo.findByEmail(email);
    if (existing) {
        const error = new Error("An account with this email already exists.");
        error.statusCode = 409;
        throw error;
    }

    // atomic: both user and password created or neither
    const user = await db.$transaction(async (tx) => {
        const newUser = await tx.users.create({
            data: { first_name, second_name, email, role, dob: new Date(dob) }
        });
        const hashedPassword = await hashValue(password);
        await tx.passwords.create({
            data: { user_id: newUser.id, password: hashedPassword }
        });
        return newUser;
    });

    return { message: "Account created successfully. Please login" };
};

//Login 
// Validates password, sends OTP — NO JWT yet
const login = async ({ email, password }) => {
    // fetch user first — needed for rate limit check
    const user = await userRepo.findByEmail(email);
    if (!user) {
        // can't record attempt without a user row — just throw
        throw new ErrorResponse("Invalid email or password.", 401);
    }

    const passwordRow = await passwordRepo.findByUserId(user.id);
    if (!passwordRow) {
        throw new ErrorResponse("Invalid email or password.", 401);
    }

    const isMatch = await compareValue(password, passwordRow.password);
    if (!isMatch) { 
        throw new ErrorResponse("Invalid email or password.", 401);
    }

    // send OTP for second factor
    const otp       = generateOtp();
    const otpHash   = await hashValue(otp);
    const otpExpiry = otpExpiresAt();
    await userRepo.saveOtp(user.id, otpHash, otpExpiry);
    await sendOtpEmail(email, otp);

    return { message: "Password verified. Check your email for the verification code.", 
             data: {
                id: user.id,
                email: user.email,
                name: user.first_name,
                role: user.role
             }};
};

// ── Verify OTP
// Confirms OTP, generates JWT — sets it in cookie in the controller
const verifyOtp = async ({ email, otp }) => {
    const user = await userRepo.findByEmail(email);
    if (!user) {
        throw new ErrorResponse("No account found with this email.", 404);
    }

    if (!user.otp_hash || !user.otp_expires_at) {
        throw new ErrorResponse("No OTP was requested for this account.", 400);
    }

    if (new Date() > new Date(user.otp_expires_at)) {
        throw new ErrorResponse("This code has expired. Please request a new one.", 400);
    }

    const isValid = await compareValue(otp, user.otp_hash);
    if (!isValid) {
        throw new ErrorResponse("Incorrect verification code.", 400);
    }

    // clear OTP so it cannot be reused
    await userRepo.clearOtp(user.id);

    // generate JWT and return with role
    const token = signToken({ userId: user.id, role: user.role });
    return { token, role: user.role };
};


const forgotPassword = async ({ email, otp, newPassword, confirmPassword }) => {

    if (email && !otp && !newPassword) {
        const user = await userRepo.findByEmail(email);
        if (!user) {
            return { message: "If an account exists with this email, a reset code will be sent." };
        }

        const otpValue = generateOtp();
        const otpHash = await hashValue(otpValue);
        const otpExpiry = otpExpiresAt();
        await userRepo.saveOtp(user.id, otpHash, otpExpiry);
        await sendOtpEmail(email, otpValue);

        return { message: "If an account exists with this email, a reset code will be sent." };
    }
    

    if (email && otp && newPassword) {
        console.log('forgotPassword called with:', { email, otp, newPassword, confirmPassword });
        if (newPassword !== confirmPassword) {
            throw new ErrorResponse("Passwords do not match.", 400);
        }

        const user = await userRepo.findByEmail(email);
        if (!user) {
            throw new ErrorResponse("Invalid request.", 400);
        }

        if (!user.otp_hash || !user.otp_expires_at) {
            throw new ErrorResponse("No reset code was requested for this account.", 400);
        }

        if (new Date() > new Date(user.otp_expires_at)) {
            throw new ErrorResponse("This code has expired. Please request a new one.", 400);
        }

        const isValid = await compareValue(otp, user.otp_hash);
        if (!isValid) {
            throw new ErrorResponse("Incorrect reset code.", 400);
        }

        const hashedPassword = await hashValue(newPassword);
        await passwordRepo.updatePassword(user.id, hashedPassword);
        await userRepo.clearOtp(user.id);

        return { message: "Password reset successfully. You can now login with your new password." };
    }

    throw new ErrorResponse("Invalid request.", 400);
};
const sendOtp = async ({ email }) => {
    const user = await userRepo.findByEmail(email);
    if (!user) {
        const error = new Error("No account found with this email.");
        error.statusCode = 404;
        throw error;
    }
    const otp       = generateOtp();
    const otpHash   = await hashValue(otp);
    const otpExpiry = otpExpiresAt();
    await userRepo.saveOtp(user.id, otpHash, otpExpiry);
    await sendOtpEmail(email, otp);
    return { message: "Verification code sent. Check your email." };
};

module.exports = { login, register, verifyOtp, sendOtp, forgotPassword };
