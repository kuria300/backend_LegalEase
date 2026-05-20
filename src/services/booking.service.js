const { 
  createBooking, 
  getUserBookings, 
  getLawyerBookings,
  getBookingById,
  rescheduleBooking,
  deleteBooking
} = require("../repositories/booking.repository");
const ErrorResponse = require("../utils/ErrorObj");
const { db } = require("../config/db");
const { VALID_SLOTS } = require("../middleware/booking.middleware")

// create a new booking
const createBookingService = async (data) => {
  try {
    // extract required fields from the incoming data
    const { user_id, lawyer_id, booking_date, booking_time, notes, meeting_type, parsedDate } = data;

    // Verify the lawyer profile exists before booking
    const lawyerExists = await db.users.findFirst({
      where: {
        id: lawyer_id,
        role: "LAWYER",
      },
    });

    // check if lawyer exists
    if (!lawyerExists) {
      throw new ErrorResponse("Lawyer not found", 404);
    }

    // Prevent lawyer from booking themselves
    if (user_id === lawyer_id) {
      throw new ErrorResponse("You cannot book yourself as a lawyer", 400);
    }

    const meetingTypeMap = {
    "Google Meet": "Google_Meet",
    "Phone Call": "Phone_Call",
    "In-Person": "In_Person"
    };

    //pass validated data to the repository to create the booking
    const booking = await createBooking({
      user_id,
      lawyer_id,
      booking_date: booking_date,
      booking_time: booking_time,
      notes,
      meeting_type: meetingTypeMap[meeting_type] || "Google_Meet"
    });

    return booking;
  } catch (err) {
    throw err;
  }
};
// Export available slots -> to be displayed in the frontend
const getAvailableSlotsService = async (lawyer_id, booking_date) => {
  try {

    // Parse and validate the date
    const parsedDate = new Date(booking_date);

    const startOfDay = new Date(parsedDate);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(parsedDate);
    endOfDay.setHours(23, 59, 59, 999);

    // Fetch all booked slots for this lawyer on this date
    const bookedSlots = await db.bookings.findMany({
      where: {
        lawyer_id: lawyer_id,
        booking_date: {
          // Get all bookings for the same day
          gte: startOfDay,
          lt: endOfDay
        },
        // Ignore cancelled bookings
        booking_status: {
          notIn: ["CANCELLED"]
        }
      },
      select: {
        // Only fetch booking_time
        booking_time: true
      }
    });

    // Extract booked time strings
    const bookedTimes = bookedSlots.map(b => {
      const time = new Date(b.booking_time);
      const hh = String(time.getHours()).padStart(2, "0");
      const mm = String(time.getMinutes()).padStart(2, "0");
      return `${hh}:${mm}`;
    });

    // restrict past dates and past time slots for today
    const now = new Date();
    const today = new Date();
    today.setHours(0,0,0,0);

    const requestedDate = new Date(parsedDate);
    requestedDate.setHours(0,0,0,0);

    const isToday = requestedDate.getTime() === today.getTime();
    
    // Filter out booked slots from all valid slots
    const availableSlots = VALID_SLOTS.filter((slot)=> {
      if(!isToday){
          return true;
      } 

      const [hours, minutes] = slot.split(":").map(Number);

      const slotTime = new Date();
      slotTime.setHours(hours, minutes, 0, 0);

      // Only return future slots 
      return slotTime > now;
    }).map(slot => ({
      time: slot,
      // Mark each slot as available or booked
      available: !bookedTimes.includes(slot)
    }));

    return availableSlots;

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
// Reschedule a confirmed and paid booking
const rescheduleBookingService = async (booking_id, new_booking_date, new_booking_time, user_id, parsedNewDate) => {
    try {
        // Check if the booking exists
        const existingBooking = await getBookingById(booking_id);
        if (!existingBooking) {
            throw new ErrorResponse("Booking not found", 404);
        }

        // Ensure the booking belongs to the authenticated user
        if (existingBooking.user_id !== user_id) {
            throw new ErrorResponse(
                "You are not authorized to reschedule this booking",
                403
            );
        }

        // Only allow rescheduling of CONFIRMED and PAID bookings
        if (
            existingBooking.booking_status !== "CONFIRMED" ||
            existingBooking.payment_status !== "PAID"
        ) {
            throw new ErrorResponse(
                "Only confirmed and paid bookings can be rescheduled",
                400
            );
        }

        // Ensure new date and time are different from the current ones
        const isSameDate =
            new Date(existingBooking.booking_date).toDateString() ===
            parsedNewDate.toDateString();
        const isSameTime = existingBooking.booking_time === new_booking_time;

        if (isSameDate && isSameTime) {
            throw new ErrorResponse(
                "New booking date and time must be different from the current booking",
                400
            );
        }
                  const convertTimeToDate = (timeStr) => {
              const [hours, minutes] = timeStr.split(":").map(Number);

              const date = new Date();
              date.setHours(hours, minutes, 0, 0);

              return date;
          };

           const bookingTimeDate = convertTimeToDate(new_booking_time);

        // Call repository to reschedule the booking
        const rescheduledBooking = await rescheduleBooking({
            booking_id,
            new_booking_date:parsedNewDate,
            new_booking_time: bookingTimeDate
       });

        return rescheduledBooking;

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
        throw new ErrorResponse("Booking already confirmed. Kindly reschedule instead", 400)
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
  rescheduleBookingService,
  deleteBookingService,
  getAvailableSlotsService
};
