const express= require('express')
const router= express.Router()
const { paymentStatus}= require('../controllers/paymentStatus')
const { getAccessToken }= require('../middleware/mpesaAuthToken')
const { authenticate}= require('../middleware/auth.middleware')

router.get('/:checkout_req_id', authenticate, paymentStatus)
// router.get('/', RegisterUser)

module.exports= router