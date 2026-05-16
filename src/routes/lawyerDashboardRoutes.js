const express = require("express");
const router = express.Router();
const { getLawyerSummary } = require("../controllers/lawyerDashboardControllers");
const {authenticate, authorise}=require("../middleware/auth.middleware")


// GET /api/lawyer-dashboard/summary
router.get("/summary", authenticate, authorise('LAWYER'), getLawyerSummary);

module.exports = router;