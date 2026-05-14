const express = require("express");
const router = express.Router();
const { getUserSummary } = require("../controllers/dashboardControllers");

// GET /api/dashboard/user-summary
router.get("/user-summary", getUserSummary);

module.exports = router;