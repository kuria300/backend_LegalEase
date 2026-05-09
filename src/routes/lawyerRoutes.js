const express = require('express');
const router = express.Router();
const lawyerCtrl = require('../controllers/lawyerContoller');

router.post('/apply', lawyerController.applyToBeLayer);

modules.exports = router;