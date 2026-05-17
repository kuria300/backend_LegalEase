const express = require("express");

const {
  fetchAllLawyers,
  fetchLawyerById,
  fetchLawyerByName
} = require("../controllers/lawyerMarketplace.controller");
const {authenticate, authorise}=require("../middleware/auth.middleware")

const router = express.Router();


// GET ALL LAWYERS
router.get("/", authenticate, authorise('CLIENT'),fetchAllLawyers);


// GET SINGLE LAWYER
router.get("/:id", authenticate , fetchLawyerById);

// GET LAWYER BY NAME
router.get("/search/:name", authenticate, fetchLawyerByName )



module.exports = router;