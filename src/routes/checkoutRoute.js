const express= require('express')
const router= express.Router()
const { paymentBook}= require('../controllers/checkoutPay')
const { getAccessToken }= require('../middleware/mpesaAuthToken')


router.post('/:booking_id', getAccessToken ,paymentBook)


module.exports= router