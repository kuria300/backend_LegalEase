const express= require('express')
const router= express.Router()
const { paymentBook}= require('../controllers/checkoutPay')
const { getAccessToken }= require('../middleware/mpesaAuthToken')
const { authenticate }= require('../middleware/auth.middleware')
const {validate, phoneValidationSchema}=require('../middleware/validate.middleware')


router.post('/:booking_id', validate(phoneValidationSchema), authenticate, getAccessToken ,paymentBook)


module.exports= router