const express= require('express')
const router= express.Router()
const { paymentStatus}= require('../controllers/paymentStatus')
const { getAccessToken }= require('../middleware/mpesaAuthToken')

router.get('/:checkout_req_id', getAccessToken, paymentStatus)
// router.get('/', RegisterUser)

module.exports= router