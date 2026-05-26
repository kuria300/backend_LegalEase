const express = require('express');
const router = express.Router();

const {
  getApplications,
  getApplicationById,
  approveApplication,
  getAllUsers,
  revokeLawyer,
  rejectApplication
} = require('../controllers/admin.controller');

const {authenticate, authorise} = require("../middleware/auth.middleware")


// System Users Route
router.get('/users',authenticate, authorise("ADMIN", "SUPERADMIN"), getAllUsers);

// Lawyer Applications Routes
router.get('/applications',authenticate, authorise("ADMIN", "SUPERADMIN"), getApplications);
router.get('/applications/:id',authenticate, authorise("ADMIN", "SUPERADMIN"), getApplicationById);
router.patch('/applications/:id/approve',authenticate, authorise("ADMIN", "SUPERADMIN"), approveApplication);
router.patch('/applications/:id/revoke',authenticate, authorise("ADMIN", "SUPERADMIN"), revokeLawyer)
router.patch("/applications/:appId/reject",authenticate,authorise("ADMIN", "SUPERADMIN"),rejectApplication)

module.exports = router;