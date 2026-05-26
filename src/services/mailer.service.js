require('dotenv').config();
const nodemailer = require('nodemailer');
const { gmail } = require('../config/emailConfig');


const transporter = nodemailer.createTransport({
    host: gmail.host,
    port: gmail.port,
    secure: true,
    auth: {
        user: gmail.user,
        pass: gmail.password,
    },
});


transporter.verify((error, success) => {
    if (error) {
        console.log("SMTP Connection Error:", error);
    } else {
        console.log("SMTP Ready to send emails");
    }
});

const sendMail = async ({ to, subject, html }) => {
    if (!to) throw new Error("Recipient email is missing");

    try {
        const info = await transporter.sendMail({
            from: `"LegalEase" <${gmail.user}>`,
            to,
            subject,
            html,
        });

        console.log("Email sent:", info.messageId);
        return info;

    } catch (error) {
        console.error("Email send failed:", error);
        throw error;
    }
};


const sendAdminCredentials = async (email, tempPassword) => {
    const html = `
    <div style="font-family: sans-serif; max-width: 520px; margin: auto; padding: 32px;
                border: 1px solid #e5e7eb; border-radius: 12px;">

      <h2 style="color: #1a1a2e;">Welcome to LegalEase Admin</h2>

      <p style="color: #6b7280;">
        You have been granted admin access to the platform.
      </p>

      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Email:</strong> ${email}</p>
        <p>
          <strong>Temporary Password:</strong>
          <code style="background:#e5e7eb;padding:4px 8px;border-radius:4px;">
            ${tempPassword}
          </code>
        </p>
      </div>

      <p style="color:#374151;font-size:14px;">
        Please log in and change your password immediately.
      </p>

      <a href="http://localhost:3000/api/auth/login"
         style="display:inline-block;margin-top:16px;background:#4f46e5;color:#fff;
                padding:12px 24px;border-radius:8px;text-decoration:none;">
        Log In to Dashboard
      </a>

    </div>
    `;

    return sendMail({
        to: email,
        subject: "Your LegalEase Admin Account",
        html,
    });
};

module.exports = { sendMail, sendAdminCredentials };