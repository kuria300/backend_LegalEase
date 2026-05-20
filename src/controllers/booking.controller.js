const { 
  createBookingService, 
  getUserBookingsService, 
  getLawyerBookingsService,
  rescheduleBookingService,
  deleteBookingService,
  getAvailableSlotsService 
} = require("../services/booking.service");
const { getBookingById } = require("../repositories/booking.repository");
const ErrorResponse = require("../utils/ErrorObj");

const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Africa/Nairobi",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(new Date(date));
};

const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Nairobi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).format(new Date(date));
};

const createBooking = async (req, res, next) => {
  try {
    // Extract booking details from request body
  
    const { lawyer_id, booking_date, booking_time, notes, meeting_type, parsedDate } = req.body;
    // extract authenticated user_id from JWT token
    const user_id = req.user.userId;
    // Call the service layer with all required booking data
    const booking = await createBookingService({
      user_id,
      lawyer_id,
      booking_date,
      booking_time,
      notes,
      meeting_type,
      parsedDate
    });
    // return success response with the created booking
    return res.status(201).json({
      success: true,
      message: "Your booking has been created successfully",
      data: booking,
    });
  } catch (err) {
    next(err.message);
  }
};

const getAvailableSlots = async (req, res, next) => {
    try {
        // Get lawyer_id and booking_date from query params
        const { lawyer_id, booking_date } = req.query;

        // Call service to get available slots
        const slots = await getAvailableSlotsService(lawyer_id, booking_date);

        return res.status(200).json({
            success: true,
            message: "Available slots retrieved successfully",
            data: slots
        });

    } catch (err) {
        next(err);
    }
};

// User booking routes

const getUserBookings = async (req, res, next) => {
  try {
    // Get logged in user ID from JWT token
    const user_id = req.user.userId;

    // Extract pagination params from query string -> eg. ?page=1&limit=10
    const { page, limit } = req.query;

    // call service to fetch paginated bookings for this user
    const result = await getUserBookingsService(user_id, page, limit);

    return res.status(200).json({
      success: true,
      message: "User bookings retrieved successfully",
      totalBookings: result.totalBookings,
      totalPages: result.totalPages,
      currentPage: result.currentPage,
      count: result.bookings.length,
      data: result.bookings
    });

  } catch (err) {
    next(err);
    
  }
};

const getLawyerBookings = async (req, res, next)=>{
  try {
    // Get lawyer id from JWT
    const lawyer_id = req.user.userId;

    // exract pagination parameters from query string
    const { page, limit } = req.query;
    // Call service to fetch paginated bookings for the lawyer
    const result = await getLawyerBookingsService(lawyer_id, page, limit);

    // return success response with paginated bookings and metadata
    return res.status(200).json({
      success: true,
      message: "Lawyer bookings retrieved successfully",
      totalBookings: result.totalBookings,
      totalPages: result.totalPages,
      currentPage: result.currentPage,
      count: result.bookings.length,
      data: result.bookings
    });
    
  } catch (err) {
    next(err);
  }
};
// Function to get a single booking by ID
const getUserBookingById = async (req, res, next) => {
  try {
    //get booking id from url parameter
    const { id } = req.params;

    // get authenticated user id from JWT token
    const user_id = req.user.userId;

    // fetch the booking from the service
    const booking = await getBookingById(id);

    if(!booking){
      throw new ErrorResponse("Booking not found", 404);
    }
    
    //ensure users can only view their own booking
    if(booking.user_id !== user_id){
      throw new ErrorResponse("You are not authorized to view this booking", 403);
    }

    return res.status(200).json({
      success: true,
      message: "Booking retrieved successfully",
      data: booking
    })
  } catch (err) {
    next(err);
  }
};

// reschedule a confirmed and paid booking
const rescheduleBooking = async (req, res, next) => {
    try {
        // Get booking ID from URL parameter
        const { id } = req.params;

        // Get new date, time and parsedNewDate from request body
        const { new_booking_date, new_booking_time, parsedNewDate} = req.body;

        // Get authenticated user ID from JWT token
        const user_id = req.user.userId;

        // Call service to validate and reschedule the booking
        const rescheduledBooking = await rescheduleBookingService(
            id,
            new_booking_date,
            new_booking_time,
            user_id,
            parsedNewDate
        );

        return res.status(200).json({
            success: true,
            message: "Booking rescheduled successfully",
            data: {
              ...rescheduledBooking,
              booking_date: formatDate(rescheduledBooking.booking_date),
              booking_time: formatTime(rescheduledBooking.booking_time)
            }
        });

    } catch (err) {
        // Pass error to the global error handler middleware
        next(err);
    }
};

// delete booking
const deleteBooking = async (req, res, next)=>{
  try {
    const { id } = req.params;
    //get user id from JWT token
    const user_id = req.user.userId;
    //call service to validate and delete the booking
    await deleteBookingService(id, user_id);

    return res.status(200).json({
      success: true,
      message: "Booking deleted successfully"
    });
  } catch (err) {
    next(err)
  }
}


module.exports = { 
  createBooking, 
  getUserBookings,
  getAvailableSlots,
  getLawyerBookings,
  getUserBookingById,
  rescheduleBooking,
  deleteBooking
};
