require('dotenv').config()
const nodemailer = require('nodemailer');

//Generates a random 6-digit numeric otp
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

//Returns a timestamp 10 min from now
const otpExpiresAt = () => {
  return new Date(Date.now() + 3 * 60 * 1000);
};
 
//Handles connection to the email services
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

//
const sendOtpEmail = async (to, otp) => {
  await transporter.sendMail({
    from: `"LegalEase" <${process.env.EMAIL_FROM}>`,
    to,
    subject: "Your LegalEase verification code",
    text: `Your verification code is: ${otp}\n\nThis code expires in 3 minutes. Do not share it with anyone.`,
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #1a1a2e;">LegalEase Verification</h2>
        <p>Use the code below to verify your email address:</p>
        <div style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #4f46e5; padding: 16px 0;">
          ${otp}
        </div>
        <p style="color: #666; font-size: 13px;">
          This code expires in 3 minutes. If you did not request this, ignore this email.
        </p>
      </div>
    `,
  });
};

module.exports = {sendOtpEmail, generateOtp, otpExpiresAt}