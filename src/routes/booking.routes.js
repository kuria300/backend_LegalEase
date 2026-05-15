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

// GET /api/bookings/user/:id - get a single booking by ID
router.get("/user/:id", authenticate, getUserBookingById);

// PUT /api/bookings/status/:id - update booking status (Task 4)
router.put("/user/status/:id", authenticate, updateBookingStatus);

//DELETE /api/bookings/user/:id
router.delete("/user/:id", authenticate, deleteBooking);

module.exports = router;