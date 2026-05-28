const nodemailer = require("nodemailer");
const { gmail }=require('../config/emailConfig')

const transporter = nodemailer.createTransport({
  host: gmail.host,
   port: gmail.port,
   secure: true, // Use SSL
   auth: {
     user: gmail.user,
     pass: gmail.password
   }
});


const sendEmail = async ({ to, subject, html }) => {
    console.log('email sent')
  await transporter.sendMail({
    from: `"LegalEase Africa" <${gmail.user}>`,
    to,
    subject,
    html,
  });
};

module.exports = { sendEmail };