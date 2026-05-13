const axios= require('axios')
const { mpesa }= require('../config/mpesaConfig')

const consumerKey= mpesa.consumer_key
const consumerSecret= mpesa.consumer_secret
const shortcode=mpesa.shortcode
const url=mpesa.authEndpoint

const getAccessToken = async(req ,res, next)=>{

try{
    const encoded= Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')

    const response= await axios.get(
       url,{

         headers:{
            Authorization: `Basic ${encoded}`
         }
       }
    )
    // treat this as a middleware so we inject into request body and the next functio can access the token easily
    req.mpesaToken=response.data.access_token
    next()
}catch(error){
    next(error)
}

}

module.exports={ getAccessToken}