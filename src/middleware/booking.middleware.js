const ErrorResponse = require("../utils/ErrorObj");

// Fixed 30-minute booking slots between 8AM and 5PM
const VALID_SLOTS = [
    "08:00", "08:30",
    "09:00", "09:30",
    "10:00", "10:30",
    "11:00", "11:30",
    "12:00", "12:30",
    "13:00", "13:30",
    "14:00", "14:30",
    "15:00", "15:30",
    "16:00", "16:30",
];

// Valid booking status enums
const VALID_STATUSES = ["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"];

// Valid meeting types enums
const VALID_MEETING_TYPES = ["Google Meet", "Phone Call", "In-Person"];

// Middleware to validate create booking request body
const validateCreateBooking = (req, res, next) => {
    try {
        const { lawyer_id, booking_date, booking_time, meeting_type } = req.body;

        // Check if required fields are present
        if (!lawyer_id || !booking_date || !booking_time) {
            throw new ErrorResponse(
                "Lawyer Id, booking date and time are required",
                400
            );
        }

        // Validate booking_time is one of the fixed slots
        if (!VALID_SLOTS.includes(booking_time)) {
            throw new ErrorResponse(
                "Invalid booking time. Select one of the available slots.",
                400
            );
        }
        if (meeting_type && !VALID_MEETING_TYPES.includes(meeting_type)){
            throw new ErrorResponse("Invalid meeting type.", 400)
        }

        // Parse and validate the date
        const parsedDate = new Date(booking_date);
        const timestamp = parsedDate.getTime()
        if (isNaN(timestamp)) {
            throw new ErrorResponse("Invalid date format provided", 400);
        }

        // Split hours and minutes from booking_time
        const [hours, minutes] = booking_time.split(":").map(Number);

        // Combine date and time
        parsedDate.setHours(0);
        parsedDate.setMinutes(0);
        parsedDate.setSeconds(0);
        parsedDate.setMilliseconds(0);

        // Check booking date is not in the past
        const now = new Date();

        if (parsedDate < now) {
            throw new ErrorResponse("Booking date cannot be in the past", 400);
        }
        const day = parsedDate.getDay();
        if (day === 0 || day === 6) {
            throw new ErrorResponse(
                "Bookings are only available from Monday - Friday",
                400
            );
        }

        // Attach parsed date to request body for use in service
        req.parsedDate = req.body.parsedNewDate;

        next();

    } catch (err) {
        next(err);
    }
};
// Middleware to validate reschedule booking request body
const validateRescheduleBooking = (req, res, next) => {
    try {
        const { new_booking_date, new_booking_time } = req.body;

        // Check if required fields are present
        if (!new_booking_date || !new_booking_time) {
            throw new ErrorResponse(
                "New booking date and new booking time are required",
                400
            );
        }

        // Validate new_booking_time is one of the fixed slots
        if (!VALID_SLOTS.includes(new_booking_time)) {
            throw new ErrorResponse(
                "Invalid booking time. Select one of the available slots",
                400
            );
        }

        // Parse and validate the new date
        const parsedDate = new Date(new_booking_date);
        if (isNaN(parsedDate.getTime())) {
            throw new ErrorResponse("Invalid date format provided", 400);
        }

        // Split hours and minutes from new_booking_time
        const [hours, minutes] = new_booking_time.split(":").map(Number);

        // Combine new date and time
        parsedDate.setHours(hours);
        parsedDate.setMinutes(minutes);
        parsedDate.setSeconds(0);
        parsedDate.setMilliseconds(0);

        // Check new booking date is not in the past
        const now = new Date();
        
        if (parsedDate < now) {
            throw new ErrorResponse("New booking date cannot be in the past", 400);
        }

        // Restrict rescheduling to Monday - Friday
        const day = parsedDate.getDay();
        if (day === 0 || day === 6) {
            throw new ErrorResponse(
                "Bookings are only available from Monday - Friday",
                400
            );
        }



        // Attach parsed new date to request body for use in service
        req.body.parsedNewDate = parsedDate ;

        next();

    } catch (err) {
        next(err);
    }
};

// Middleware to validate available slots
const validateGetSlots = (req, res, next) => {
    try {
        const { lawyer_id, booking_date } = req.query;

        // Ensure required query params are present
        if (!lawyer_id || !booking_date) {
            throw new ErrorResponse(
                "Lawyer ID and booking date are required",
                400
            );
        }


        // Parse and validate the date
        const parsedDate = new Date(booking_date);
        if (isNaN(parsedDate.getTime())) {
            throw new ErrorResponse("Invalid date format provided", 400);
        }

        // Restrict to Monday - Friday
        const day = parsedDate.getDay();
        if (day === 0 || day === 6) {
            throw new ErrorResponse(
                "Bookings are only available from Monday - Friday",
                400
            );
        }
        // Check new booking date is not in the past
        parsedDate.setHours(0,0,0,0)
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        if (parsedDate < now) {
            throw new ErrorResponse("Booking date cannot be in the past", 400);
        }

        next();

    } catch (err) {
        next(err);
    }
};

module.exports = { 
    validateCreateBooking, 
    validateRescheduleBooking,
    validateGetSlots,
    VALID_SLOTS,
    VALID_MEETING_TYPES
};