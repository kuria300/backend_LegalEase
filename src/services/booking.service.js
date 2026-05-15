const { 
  createBooking, 
  getUserBookings, 
  getLawyerBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking
} = require("../repositories/booking.repository");
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
    const bookingHour = parsedDate.getHours();
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
      booking_date: parsedDate,
      booking_time: parsedDate,
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
// -> valid booking enums
const ENUMS = ["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"];

const updateBookingStatusService = async (booking_id, booking_status, user_id) => {
  try {
    // check availability of booking_id
    if(!booking_id){
      throw new ErrorResponse("Booking Id is required", 400);
    }
    // ensure booking status if provided
    if(!booking_status){
      throw new ErrorResponse("Booking status is required", 400);
    }

    // validate the provided status against allowed enums
    if(!ENUMS.includes(booking_status)){
      throw new ErrorResponse(`Invalid status. Must be one of: ${ENUMS.join(", ")}`, 400);
    }

    // check if the booking exists
    const existingBooking = await getBookingById(booking_id);
    if(!existingBooking){
      throw new ErrorResponse("Booking not found", 404)
    }

    // Ensure the booking belongs to the authenticated user
    if(existingBooking.user_id !== user_id){
      throw new ErrorResponse("You are not authorized to update this booking", 403);
    }

    // Prevent updates on cancelled bookings
    if(existingBooking.booking_status === "CANCELLED"){
      throw new ErrorResponse("Can't update. Booking already cancelled!", 400);
    }

    // Prevent updates on completed bookings
    if(existingBooking.booking_status === "COMPLETED"){
      throw new ErrorResponse("Can't update. Booking already completed!", 400);
    }

    // Update the booking status in the repository
    const updatedBooking = await updateBookingStatus(booking_id, booking_status);
    return updatedBooking;

  } catch (err) {
    throw err;
  }
};
//delete booking by -> ID
const deleteBookingService = async (booking_id, user_id)=>{
  try {
    if(!booking_id){
      throw new ErrorResponse("Booking ID is required", 400)
    }
    //check if the booking exists
    const existingBooking = await getBookingById(booking_id);
    if(!existingBooking){
      throw new ErrorResponse("Booking not found", 404);
    }
    // ensure user deletes a booking they own
    if (existingBooking.user_id !== user_id){
      throw new ErrorResponse("You're not authorized to delete this booking", 403)
    }
    //prevent deleting confirmed and paid bookings
    if(
      existingBooking.booking_status === "CONFIRMED" &&
      existingBooking.payment_status === "PAID"){
        throw new ErrorResponse("Cannot delete a booking that has already been paid and confirmed", 400)
      }
      // call delete booking from the repository
      const deletedBooking = await deleteBooking(booking_id);

      return deletedBooking;

  } catch (err) {
    throw err;
  }
}

module.exports = { 
  createBookingService, 
  getUserBookingsService, 
  getLawyerBookingsService,
  updateBookingStatusService,
  deleteBookingService
};
