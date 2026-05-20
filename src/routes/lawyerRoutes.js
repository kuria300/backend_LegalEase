const express = require('express');
const router = express.Router();
const { applyToBeLawyer } = require('../controllers/lawyerController');
const { validate, lawyerApplicationSchema } = require('../middleware/validate.middleware');
const { authenticate, authorise } = require('../middleware/auth.middleware');

// Combines authentication, authorization, payload validation, and names the path properly!
router.post("/apply", authenticate, validate(lawyerApplicationSchema), applyToBeLawyer);

console.log("LAWYER ROUTES FILE LOADED");

module.exports = router;