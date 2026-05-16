const express = require ('express');
const router = express.Router();
const { approveLawyer} = require('../controllers/adminController');
const { authenticate, authorise }=require('../middleware/auth.middleware')

// DEFINE THE APPROVAL ENDPOINT
router.patch('/approve', authenticate, authorise('ADMIN') ,approveLawyer);

module.exports = router;