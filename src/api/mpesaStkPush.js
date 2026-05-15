const axios = require('axios')
const { mpesa } = require('../config/mpesaConfig')
const dayjs= require('dayjs')
const ErrorResponse= require('../utils/ErrorObj')


const shortcode= mpesa.shortcode
const passkey= mpesa.passkey
const callBackUrl= mpesa.callBackUrl
const url= mpesa.stkPushEndpoint

const stkPush = async(token, phoneNumber, amount)=>{

    try {
        const timestamp = dayjs().format("YYYYMMDDHHmmss");

        const password = Buffer.from(
            `${shortcode}${passkey}${timestamp}`
        ).toString('base64');

        const body = {
            "BusinessShortCode": shortcode,
            "Password": password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": Math.round(amount),
            "PartyA": phoneNumber, 
            "PartyB": shortcode,
            "PhoneNumber": phoneNumber,
            "CallBackURL": "https://994a-102-209-76-118.ngrok-free.app/payments/callback",
            "AccountReference": "LegalEasePay",
            "TransactionDesc": "Payment for Bookings"
        };

        const response = await axios.post(
            url,
            body,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        // Return only the data part of the axios response
        return response.data;

    } catch (error) {
        // Log error from safaricom after axios post if it fails the error will be caught here
        if (error.response) {
            console.error("Mpesa Error:", error.response.data);
            throw new ErrorResponse(error.response.data.errorMessage);
        }
        throw new ErrorResponse(error)
    }
};

module.exports = { stkPush };