require('dotenv').config()
const nodemailer = require('nodemailer');
const { gmail } = require('../config/emailConfig')

// Generates a random 6-digit numeric OTP
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Returns a timestamp 3 minutes from now - OTP expires after 3 minutes
const otpExpiresAt = () => {
  return new Date(Date.now() + 3 * 60 * 1000);
};

// Handles connection to the email service using Gmail SMTP credentials from config
const transporter = nodemailer.createTransport({
  host: gmail.host,
  port: gmail.port,
  auth: {
    user: gmail.user,
    pass: gmail.password
  }
});

// Sends an OTP email to the specified recipient
const sendOtpEmail = async (to, otp) => {
  console.log(`Sending OTP ${otp} to ${to} ${gmail.user}`);
  try {
    await transporter.sendMail({
      from: `"LegalEase" <${gmail.user}>`,
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
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Email error:', error.message);
  }
};

module.exports = { sendOtpEmail, generateOtp, otpExpiresAt }