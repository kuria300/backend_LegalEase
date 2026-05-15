const express= require('express')
const router= express.Router()
const { paymentBook}= require('../controllers/checkoutPay')
const { getAccessToken }= require('../middleware/mpesaAuthToken')
const { authenticate }= require('../middleware/auth.middleware')


router.post('/:booking_id', authenticate, getAccessToken ,paymentBook)


module.exports= router