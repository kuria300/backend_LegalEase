const axios = require('axios')
const { mpesa } = require('../config/mpesaConfig')
const dayjs= require('dayjs')
const ErrorResponse = require('../utils/ErrorObj')

const passkey= mpesa.passkey
const shortcode=mpesa.shortcode
const url= mpesa.statusEndpoint

const queryStkApi = async(token, checkoutReqID)=>{
    const timestamp= dayjs().format("YYYYMMDDHHmmss");

    const password=Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64')

     const body = {
        "BusinessShortCode": shortcode,
        "Password": password,
        "Timestamp": timestamp,
        "CheckoutRequestID": checkoutReqID
    };

    try{
         const response = await axios.post(url, body, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })

        return response.data
    }catch(error){
        if(error.response){
            console.log('error', error.response.data)
            throw new ThrowError(error.response.data.errorMessage, 400)
        }
        throw new ThrowError(error.message || 'Something went wrong.Please try again', 500)
    }

}

module.exports={ queryStkApi }