const express = require("express");
const router = express.Router();

const { createBooking } = require("../controllers/booking.controller");
const { authenticate } = require("../middleware/auth.middleware");

// POST /api/bookings - Create a new booking
router.post("/", authenticate, createBooking);

module.exports = router;