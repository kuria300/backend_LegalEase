const express = require("express");

const router = express.Router();

const {
  editLawyerProfile,
  changeLawyerStatus,
} = require("../controllers/lawyerProfileController");


// UPDATE LAWYER PROFILE
router.patch("/:id", editLawyerProfile);


// UPDATE ACTIVE STATUS
router.patch("/status/:id", changeLawyerStatus);


module.exports = router;