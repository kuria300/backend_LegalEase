const express = require('express');
const router = express.Router();
const {applyToBeLawyer}= require('../controllers/lawyerController');
const {authenticate, authorise}=require('../middleware/auth.middleware')

router.post("/",authenticate, authorise('LAWYER'),applyToBeLawyer);
console.log("LAWYER ROUTES FILE LOADED");

module.exports = router;