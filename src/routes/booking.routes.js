const express = require("express");
const router = express.Router();

const { createBooking } = require("../controllers/booking.controller");
const { verifyToken } = require("../middleware/auth.middleware");

// POST /api/bookings - Create a new booking
router.post("/", verifyToken, createBooking);

module.exports = router;