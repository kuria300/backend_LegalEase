const express = require("express");
const router = express.Router();
const { getLawyerSummary } = require("../controllers/lawyerDashboardControllers");

// GET /api/lawyer-dashboard/summary
router.get("/summary", getLawyerSummary);

module.exports = router;