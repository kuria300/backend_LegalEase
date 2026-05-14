require('dotenv').config()


module.exports={
    gmail:{
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user:process.env.SMTP_USER,
      password:process.env.SMTP_PASS

    }
}