const userRepo = require('../repositories/user.repository');
const passwordRepo = require('../repositories/password.repository');
const { hashValue, compareValue} = require('../utils/hash.utils');
const { signToken } = require('../utils/jwt.utils');
const { generateOtp, otpExpiresAt, sendOtpEmail } = require('../utils/otp.utils');
const ErrorResponse = require('../utils/ErrorObj');



//register a new user with new email and password
const register = async ({first_name, second_name, email, password, dob})=> {
    const existing = await userRepo.findByEmail(email);
    if (existing) {
        throw new ErrorResponse("An account with this email already exists", 409)
    }

    const user = await userRepo.createUser({first_name, second_name, email, dob: dob ? new Date(dob): null});
    const hashedPassword = await hashValue(password);
    await passwordRepo.createPassword(user.id, hashedPassword);

    const otp = generateOtp();
    const otpHash = await hashValue(otp);
    const otpExpiry = otpExpiresAt();
    await userRepo.saveOtp(user.id, otpHash, otpExpiry);

    await sendOtpEmail(email, otp);

    return{message: "Account created. Check your email for verification code."};
};


const login = async ({email, password})=> {
    const user = await userRepo.findByEmail(email);
    if (!user) {
        throw new ErrorResponse("Invalid email or password.", 401)
    }

    const passwordRow = await passwordRepo.findByUserId(user.id);
    if (!passwordRow) {
        throw new ErrorResponse("Invalid email or password.", 401)
    }

    const isMatch = await compareValue(password, passwordRow.password);
    if (!isMatch) {
        throw new ErrorResponse("Invalid email or password.", 401)
    }

    const token = signToken({userId: user.id, role:user.role});
    return {token}
}

//Send otp to an existing user's email
const sendOtp = async ({ email }) => {
  const user = await userRepo.findByEmail(email);
  if (!user) {
    throw new ErrorResponse("No account found with this email.",404)
  }
 
  const otp       = generateOtp();
  const otpHash   = await hashValue(otp);
  const otpExpiry = otpExpiresAt();
  await userRepo.saveOtp(user.id, otpHash, otpExpiry);
 
  await sendOtpEmail(email, otp);
 
  return { message: "Verification code sent. Check your email." };
};
 
//Verify otp submitted by user
const verifyOtp = async ({ email, otp }) => {
  const user = await userRepo.findByEmail(email);
  if (!user) {
    throw new ErrorResponse("No account found with this email.",404)
  }
 
  if (!user.otp_hash || !user.otp_expires_at) {
    throw new ErrorResponse("No OTP was requested for this account.", 400)
  }
 
  if (new Date() > new Date(user.otp_expires_at)) {
    throw new ErrorResponse("This code has expired. Please request a new one.", 400)
  }
 
  const isValid = await compareValue(otp, user.otp_hash);
  if (!isValid) {
    throw new ErrorResponse("Incorrect verification code.", 400)
  }
 
  await userRepo.clearOtp(user.id);
 
  const token = signToken({ userId: user.id, role: user.role });
  return { token };

}
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

module.exports = { login, register, verifyOtp, sendOtp, forgotPassword };
