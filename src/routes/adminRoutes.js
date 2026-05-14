const express = require ('express');
const router = express.Router();
const { approveLawyer} = require('../controllers/adminController');

// DEFINE THE APPROVAL ENDPOINT
router.patch('/approve', approveLawyer);

module.exports = router;