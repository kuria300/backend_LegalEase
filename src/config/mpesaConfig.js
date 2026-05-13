require('dotenv').config()


module.exports={
     mpesa:{
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      shortcode: process.env.SHORTCODE,
      passkey: process.env.PASSKEY,
      authEndpoint: process.env.AUTH_TOKEN_ENDPOINT,
      callBackUrl: process.env.CALLBACKURL,
      stkPushEndpoint: process.env.STK_PUSH_ENDPOINT
    }
}