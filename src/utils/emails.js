const nodemailer = require("nodemailer")
const { gmail} = require("../config/emailConfig")
const ErrorResponse = require("./ErrorObj")

const transporter = nodemailer.createTransport({
  host: gmail.host,
  port: gmail.port,
  auth: {
    user: gmail.user,
    pass: gmail.password,
  },
})

const sendApprovalEmail = async ({ to, name }) => {
   if (!to) throw new ErrorResponse("sendApprovalEmail: recipient email is required")
  await transporter.sendMail({
    from: `"LegalEase" <${gmail.user}>`,
    to,
    subject: "Your LegalEase Application Has Been Approved 🎉",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #000e27; padding: 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">LegalEase</h1>
        </div>
        <div style="background: #f9f9ff; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e7eeff;">
          <h2 style="color: #111c2c;">Congratulations, ${name}! 🎉</h2>
          <p style="color: #44474f; line-height: 1.6;">
            Your application to join LegalEase as a verified advocate has been reviewed and 
            <strong>approved</strong>. Your account is now active and visible to clients.
          </p>
          <div style="background: #fed65b; border-radius: 8px; padding: 16px; margin: 24px 0;">
            <p style="margin: 0; color: #241a00; font-weight: bold;">What happens next?</p>
            <ul style="color: #241a00; margin: 8px 0 0 0; padding-left: 20px;">
              <li>Log in to your account to complete your public profile</li>
              <li>Set your availability for client consultations</li>
              <li>You will be notified when a client books with you</li>
            </ul>
          </div>
          <a href="https://legaleaseafrica.org/__api__/api/auth/login" 
            style="display: inline-block; background: #000e27; color: #ffffff; padding: 12px 24px; 
            border-radius: 8px; text-decoration: none; font-weight: bold;">
            Go to Dashboard →
          </a>
          <p style="color: #747780; font-size: 12px; margin-top: 32px;">
            If you have any questions, reply to this email or contact our support team.
          </p>
        </div>
      </div>
    `,
  })
}

const sendRejectionEmail = async ({ to, name }) => {
  if (!to) throw new ErrorResponse("sendRejectionEmail: recipient email is required")
  await transporter.sendMail({
    from: `"LegalEase" <${gmail.user}>`,
    to,
    subject: "Update on Your LegalEase Application",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #000e27; padding: 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">LegalEase</h1>
        </div>
        <div style="background: #f9f9ff; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e7eeff;">
          <h2 style="color: #111c2c;">Hi ${name},</h2>
          <p style="color: #44474f; line-height: 1.6;">
            Thank you for applying to join LegalEase. After reviewing your application,
            we are unable to approve it at this time.
          </p>
          <p style="color: #44474f; line-height: 1.6;">
            You are welcome to reapply. If you believe this decision was made in error, 
            please contact our support team.
          </p>
            <a href="https://legaleaseafrica.org/__api__/api/auth/register" 
            style="display: inline-block; background: #000e27; color: #ffffff; padding: 12px 24px;
            border-radius: 8px; text-decoration: none; font-weight: bold;">
            Reapply Now →
          </a>
        </div>
      </div>
    `,
  })
}

module.exports = { sendApprovalEmail, sendRejectionEmail }