const express= require('express')
const router= express.Router()
const { callbackEndPoint }= require('../controllers/callBackWebhook')
const { getAccessToken }= require('../middleware/mpesaAuthToken')


router.post('/', getAccessToken, callbackEndPoint)

module.exports= router