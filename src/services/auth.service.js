const userRepo = require('../repositories/user.repository');
const passwordRepo = require('../repositories/password.repository');
const { hashValue, compareValue} = require('../utils/hash.utils');
const { signToken } = require('../utils/jwt.utils');



//register a new user with new email and password
const register = async ({first_name, second_name, email, password, dob})=> {
    const existing = await userRepo.findByEmail(email);
    if (existing) {
        const error = new Error("An account with this email already exists");
        error.statusCode = 409;
        throw error;
    }

    const user = await userRepo.createUser({first_name, second_name, email, dob: dob ? new Date(dob): null});
    const hashedPassword = await hashValue(password);
    await passwordRepo.createPassword(user.id, hashedPassword);

    // const otp = generateOtp();
    // const otpHash = await hashValue(otp);
    // const otpExpiry = otpExpiresAt();
    // await userRepo.saveOtp(user.id, otpHash, otpExpiry);

    // await sendOtpEmail(email, otp);

    return{message: "Account created. Check your email for verification code."};
};


const login = async ({email, password})=> {
    const user = await userRepo.findByEmail(email);
    if (!user) {
        const error = new Error("Invalid email or password.");
        error.statusCode = 401;
        throw error;
    }

    const passwordRow = await passwordRepo.findByUserId(user.id);
    if (!passwordRow) {
        const error = new Error("Invalid email or password.");
        error.statusCode = 401;
        throw error;
    }

    const isMatch = await compareValue(password, passwordRow.password);
    if (!isMatch) {
        const error = new Error("Invalid email or password.");
        error.statusCode = 401;
        throw error;
    }

    const token = signToken({userId: user.id, role:user.role});
    return {token}
}

module.exports = { login, register};


