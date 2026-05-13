const { createBooking, getUserBookings, getLawyerBookings } = require("../repositories/booking.repository");
const ErrorResponse = require("../utils/ErrorObj");
const { db } = require("../config/db")

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
    // Verify the lawyer profile exists before booking
    const lawyerExists = await db.users.findFirst({
      where: {
        id: lawyer_id,
        role: "LAWYER"
      }
    });
    if(!lawyerExists){
      throw new ErrorResponse("Lawyer not found", 404);
    }
    // Prevent lawyer from booking themselves
    if(user_id === lawyerExists.lawyer_application_id){
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
// user booking routes

const getUserBookingsService = async (user_id, page, limit) => {
  try {
    // confirm whether user is present before querying the database
    if (!user_id) {
      throw new ErrorResponse("Authentication is required", 400);
    }
    // set default page to 1 if page is not provided
    const currentPage = parseInt(page) || 1;

    // set default to 10 bookings if not provided
    const pageLimit = parseInt(limit) || 10;

    // Validate page number is a positive int
    if(currentPage < 1){
      throw new ErrorResponse("Page must be greater than 0", 400);
    }
    // fetch user paginated bookings from the repository
    const result = await getUserBookings(user_id, currentPage, pageLimit);

    return result;
  } catch (err) {
    throw err;
  }
};
const getLawyerBookingsService = async (lawyer_id, page, limit) => {
  try {
    //ensure lawyer is authenticated
    if(!lawyer_id){
      throw new ErrorResponse("Lawyer Id is required", 400);
    }
    // default to the first page if not provided
    const currentPage = parseInt(page) || 1;

    // default to 10 bookings per page if not provided
    const pageLimit = parseInt(limit) || 10;

    // ensure page number -> positive integer
    if(currentPage < 1) {
      throw new ErrorResponse("Page number must be greater than 0", 400);
    }

    // fetch paginated bookings 
    const result = await getLawyerBookings(lawyer_id, currentPage, pageLimit);

    return result;

  } catch (err) {
    throw err;
  }
}

module.exports = { createBookingService, getUserBookingsService, getLawyerBookingsService };
