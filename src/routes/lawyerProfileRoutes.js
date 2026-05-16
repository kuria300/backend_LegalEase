const express = require("express");

const router = express.Router();

const {
  editLawyerProfile,
  changeLawyerStatus,
} = require("../controllers/lawyerProfileController");
const {authenticate, authorise}=require("../middleware/auth.middleware")

// UPDATE LAWYER PROFILE
router.patch("/:id", authenticate, authorise('LAWYER'),editLawyerProfile);


// UPDATE ACTIVE STATUS
router.patch("/status/:id", authenticate, authorise('LAWYER'),changeLawyerStatus);


module.exports = router;