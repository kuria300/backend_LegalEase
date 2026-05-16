const express = require("express");

const {
  fetchAllLawyers,
  fetchLawyerById,
} = require("../controllers/lawyerMarketplace.controller");
const {authenticate, authorise}=require("../middleware/auth.middleware")

const router = express.Router();


// GET ALL LAWYERS
router.get("/", authenticate, authorise('CLIENT'),fetchAllLawyers);


// GET SINGLE LAWYER
router.get("/:id", fetchLawyerById);


module.exports = router;