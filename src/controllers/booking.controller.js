const { createBookingService, getUserBookingsService, getLawyerBookingsService } = require("../services/booking.service");
const ErrorResponse = require("../utils/ErrorObj");

const createBooking = async (req, res, next) => {
  try {
    // Extract booking details from request body
    const { lawyer_id, date, notes } = req.body;
    // extract authenticated user_id from JWT token
    const user_id = req.user.id;
    // Call the service layer with all required booking data
    const booking = await createBookingService({
      user_id,
      lawyer_id,
      date,
      notes,
    });
    // return success response with the created booking
    return res.status(201).json({
      success: true,
      message: "Your booking has been created successfully",
      data: booking,
    });
  } catch (err) {
    next(err);
  }
};
// User booking routes

const getUserBookings = async (req, res, next) => {
  try {
    // Get logged in user ID from JWT token
    const user_id = req.user.id;

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
    const lawyer_id = req.user.id;

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

module.exports = { createBooking, getUserBookings, getLawyerBookings };
