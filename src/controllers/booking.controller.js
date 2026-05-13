const { createBookingService } = require("../services/booking.service");
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

module.exports = { createBooking };
