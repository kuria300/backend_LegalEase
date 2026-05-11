const express = require('express');
const router = express.Router();
const {applyToBeLawyer}= require('../controllers/lawyerController');

router.post("/",applyToBeLawyer);

module.exports = router;