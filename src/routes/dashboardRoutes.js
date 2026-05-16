const express = require("express");
const router = express.Router();
const { getUserSummary } = require("../controllers/dashboardControllers");
const { authenticate, authorise}=require('../middleware/auth.middleware')

// GET /api/dashboard/user-summary
router.get("/user-summary", authenticate, authorise('CLIENT'),getUserSummary);

module.exports = router;