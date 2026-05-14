const express = require('express');
const router = express.Router();
const {applyToBeLawyer}= require('../controllers/lawyerController');

router.post("/",applyToBeLawyer);
console.log("LAWYER ROUTES FILE LOADED");

module.exports = router;