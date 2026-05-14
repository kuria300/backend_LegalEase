const { createBooking } = require("../repositories/booking.repository");
const ErrorResponse = require("../utils/ErrorObj");
const { db } = require("../config/db");

const createBookingService = async (data) => {
  try {
    // extract required fields from the incoming data
    const { user_id, lawyer_id, booking_date, booking_time, notes } = data;

    //check if primary fields are present before proceeding.
    if (!lawyer_id || !booking_date || !booking_time) {
      throw new ErrorResponse(
        "Lawyer ID, booking date, and booking time are required",
        400,
      );
    }

    //Otherwise -> parse and validate the date
    const parsedDate = new Date(booking_date);
    const timestamp = parsedDate.getTime();
    if (isNaN(timestamp)) {
      throw new ErrorResponse("Invalid date format provided", 400);
    }

    //Split hours and minutes
    const [hours, minutes] = booking_time.split(":").map(Number);

    const isValidTime =
      Number.isInteger(hours) &&
      Number.isInteger(minutes) &&
      hours >= 0 &&
      hours <= 23 &&
      minutes >= 0 &&
      minutes <= 59;

    if (!isValidTime) {
      throw new ErrorResponse("Invalid booking time.", 400);
    }
    // combine date and time
    parsedDate.setHours(hours);
    parsedDate.setMinutes(minutes);
    parsedDate.setSeconds(0);
    parsedDate.setMilliseconds(0);

    // Check to ensure booking date is not in the past
    const now = new Date();
    if (parsedDate < now) {
      throw new ErrorResponse("Booking date cannot be in the past.", 400);
    }

    // restrict bookings to monday -> friday
    const day = parsedDate.getDay();
    // sunday = 0, saturday = 6
    if (day === 0 || day === 6) {
      throw new ErrorResponse(
        "Bookings are only available from Monday - Friday",
        400,
      );
    }

    //Restrict bookings between 8AM and 5PM
    const bookingHour = parseDateDef.getHours();
    if (bookingHour < 8 || bookingHour >= 17) {
      throw new ErrorResponse(
        "Bookings are only allowed between 8AM and 5PM",
        400,
      );
    }

    // Verify the lawyer profile exists before booking
    const lawyerExists = await db.users.findFirst({
      where: {
        id: lawyer_id,
        role: "LAWYER",
      },
    });
    if (!lawyerExists) {
      throw new ErrorResponse("Lawyer not found", 404);
    }
    // Prevent lawyer from booking themselves
    if (user_id === lawyerExists.lawyer_application_id) {
      throw new ErrorResponse("You cannot book yourself as a lawyer", 400);
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
