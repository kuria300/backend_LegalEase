const express = require("express");
const router = express.Router();

const { 
    createBooking, 
    getUserBookings,
    getAvailableSlots, 
    getLawyerBookings,
    getUserBookingById,
    rescheduleBooking,  
    deleteBooking
} = require("../controllers/booking.controller");
const { 
    validateCreateBooking,
    validateRescheduleBooking,
    validateGetSlots
} = require("../middleware/booking.middleware")
const { authenticate, authorise } = require("../middleware/auth.middleware");

// POST /api/bookings - Create a new booking
router.post("/", authenticate, validateCreateBooking, createBooking);

// GET /api/bookings/user
// -> Get all bookings for the authenticated user
router.get("/user", authenticate, getUserBookings);

// GET /api/bookings/lawyer
router.get("/lawyer", authenticate, authorise("LAWYER"), getLawyerBookings);

// GET /api/bookings/slots - get available slots for a lawyer on a date
router.get("/slots", authenticate, validateGetSlots, getAvailableSlots);

// GET /api/bookings/user/:id - get a single booking by ID
router.get("/user/:id", authenticate, getUserBookingById);

// PUT /api/bookings/user/reschedule/:id - Reschedule a confirmed and paid booking
router.put("/user/reschedule/:id", authenticate, validateRescheduleBooking, rescheduleBooking);

//DELETE /api/bookings/user/:id
router.delete("/user/:id", authenticate, deleteBooking);

module.exports = router;