const express = require("express")
const router = express.Router()
const { authenticate, authorise } = require("../middleware/auth.middleware");
const { createAdmin } = require("../controllers/superadmin.controller")

// POST /api/admin/create-admin
router.post("/create-admin", authenticate, authorise('SUPERADMIN'), createAdmin)

module.exports = router