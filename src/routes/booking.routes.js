const express = require("express");
const router = express.Router();

const { 
    createBooking, 
    getUserBookings, 
    getLawyerBookings,
    getUserBookingById, 
    updateBookingStatus, 
    deleteBooking
} = require("../controllers/booking.controller");
const { authenticate, authorise } = require("../middleware/auth.middleware");

// POST /api/bookings - Create a new booking
router.post("/", authenticate, createBooking);

// GET /api/bookings/user
// -> Get all bookings for the authenticated user
router.get("/user", authenticate, getUserBookings);

// GET /api/bookings/lawyer
router.get("/lawyer", authenticate, authorise("LAWYER"), getLawyerBookings);

// GET /api/bookings - get a single booking by ID
router.get("/:id", authenticate, getUserBookingById);

// PUT /api/bookings/:id/status - update booking status (Task 4)
router.put("/:id/status", authenticate, updateBookingStatus);

//DELETE /api/bookings/:id
router.delete("/:id", authenticate, deleteBooking);

module.exports = router;