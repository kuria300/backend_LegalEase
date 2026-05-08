require('dotenv').config()


module.exports={
    PORT: process.env.PORT || 3000,
    TZ: "Africa/Nairobi",
    numLessCpus: process.env.NUMLESSCPUS
}

