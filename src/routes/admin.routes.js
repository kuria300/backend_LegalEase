const express = require('express');
const router = express.Router();

const {
  getApplications,
  getApplicationById,
  approveApplication,
  getAllUsers,
  revokeLawyer
} = require('../controllers/admin.controller');

const {authenticate, authorise} = require("../middleware/auth.middleware")

// System Users Route
router.get('/users',authenticate,authorise("ADMIN"), getAllUsers);

// Lawyer Applications Routes
router.get('/applications',authenticate, authorise("ADMIN"), getApplications);
router.get('/applications/:id',authenticate, authorise("ADMIN"), getApplicationById);
router.patch('/applications/:id/approve',authenticate, authorise("ADMIN"), approveApplication);
router.patch('/applications/:id/revoke',authenticate, authorise("ADMIN"), revokeLawyer)

module.exports = router;