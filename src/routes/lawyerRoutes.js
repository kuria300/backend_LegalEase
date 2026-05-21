const express = require("express")
const router = express.Router()
const { applyToBeLawyer } = require("../controllers/lawyerController")
const { validate, lawyerApplicationSchema } = require("../middleware/validate.middleware")
const { authenticate, authorise } = require("../middleware/auth.middleware")

router.post(
  "/",
  validate(lawyerApplicationSchema),
  applyToBeLawyer
)

module.exports = router
