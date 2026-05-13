const express = require("express");
const router = express.Router();

const { createBooking, getUserBookings } = require("../controllers/booking.controller");
const { authenticate } = require("../middleware/auth.middleware");

// POST /api/bookings - Create a new booking
router.post("/", authenticate, createBooking);
// GET /api/bookings/user
// -> Get all bookings for the authenticated user
router.get("/user", getUserBookings);

module.exports = router;