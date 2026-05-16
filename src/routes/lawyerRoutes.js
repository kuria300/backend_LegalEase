const express = require('express');
const router = express.Router();
const {applyToBeLawyer}= require('../controllers/lawyerController');
const{validate,lawyerApplicationSchema} = require('../middleware/validate.middleware');

router.post("/", validate(lawyerApplicationSchema),applyToBeLawyer);
const {authenticate, authorise}=require('../middleware/auth.middleware')

router.post("/",authenticate, authorise('LAWYER'),applyToBeLawyer);
console.log("LAWYER ROUTES FILE LOADED");

module.exports = router;