const express = require("express");

const {
  fetchAllLawyers,
  fetchLawyerById,
} = require("../controllers/lawyerMarketplace.controller");

const router = express.Router();


// GET ALL LAWYERS
router.get("/", fetchAllLawyers);


// GET SINGLE LAWYER
router.get("/:id", fetchLawyerById);


module.exports = router;