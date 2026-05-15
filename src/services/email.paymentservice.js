require('dotenv').config()
const nodemailer = require('nodemailer');
const { gmail } = require('../config/emailConfig')

const transporter = nodemailer.createTransport({
    host: gmail.host,
    port: gmail.port,
    secure: true,
    auth: {
        user: gmail.user,
        pass: gmail.password
    }
})

const sendEmailService = async({email, name, amount, bookingId, mpesaReceipt, role})=>{
    if (!email) {
        throw new Error("Recipient email is missing");
    }

    const isClient = role === 'CLIENT' ? true: false

    const title = isClient ? "Payment Successful - Booking Confirmed": "New Paid Booking Received";

    const message = isClient ? "Your payment has been received and your booking is confirmed.": 'A client has successfully paid and booked a consultation'

    const html = `<div style="font-family: Arial, sans-serif; background:#f6f8fb; padding:40px;">

                    <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

                        <div style="background:#150e69;padding:20px;text-align:center;color:white;">
                            <h2 style="margin:0;">LegalEase</h2>
                        </div>

                        <div style="padding:30px;">

                            <h2 style="color:#111827;margin-bottom:10px;">
                                ${title}
                            </h2>

                            <p style="color:#374151;font-size:15px;">
                                Hi <strong>${name}</strong>,
                            </p>

                            <p style="color:#4b5563;">
                                ${message}
                            </p>

                            <div style="margin:25px 0;padding:15px;border:1px solid #e5e7eb;border-radius:10px;background:#f9fafb;">

                                <p style="margin:6px 0;"><strong>Booking ID:</strong> ${bookingId}</p>

                                <p style="margin:6px 0;"><strong>Amount:</strong> KES ${amount}</p>

                                <p style="margin:6px 0;"><strong>M-Pesa Receipt:</strong> ${mpesaReceipt}</p>

                            </div>

                            <p style="color:#6b7280;font-size:13px;">
                                If you have any questions, contact LegalEase support.
                            </p>

                        </div>

                        <div style="background:#f3f4f6;padding:15px;text-align:center;font-size:12px;color:#6b7280;">
                            © ${new Date().getFullYear()} LegalEase. All rights reserved.
                        </div>

                    </div>

                </div>
    `;

    try{

        await transporter.sendMail({
            from: `"LegalEase" <${gmail.user}>`,

            to: email,

            subject: 'Payment Confirmation',

            html
        })

        console.log('Payment sent')

    }catch(error){
        console.log('Email Error', error)

        throw error
    }

}

module.exports ={ sendEmailService }