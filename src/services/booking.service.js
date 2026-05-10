const { createBooking } = require("../repositories/booking.repository");
const { ErrorResponse } = require("../utils/ErrorObj");

const createBookingService = async (data) => {
  try {
    // extract required fields from the incoming data
    const { user_id, lawyer_id, date, notes } = data;

    //check if primary fields are present before proceeding.
    if (!lawyer_id || !date) {
      throw new ErrorResponse("Lawyer ID and date are required", 400);
    }

    //Otherwise -> parse and validate the date
    const parsedDate = new Date(date);
    const timestamp = parsedDate.getTime();
    if (isNaN(timestamp)) {
      throw new ErrorResponse("Invalid date format provided", 400);
    }

    // Check to ensure booking date is not in the past
    const now = new Date();
    if (parsedDate < now) {
      throw new ErrorResponse(
        `Booking date cannot be in the past. Please select a date from ${now} onwards`,
        400,
      );
    }
    //pass validated data to the repository to create the booking
    const booking = await createBooking({
      user_id,
      lawyer_id,
      date: parsedDate,
      notes,
    });
    return booking;
  } catch (err) {
    throw err;
  }
};

module.exports = { createBookingService };
