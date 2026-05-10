const { db } = require("../config/db");
const { ErrorResponse } = require("../utils/ErrorObj");

const createBooking = async (data) => {
    try {
        // Check for double booking -> same date/time
        // Ignore cancelled bookings
        const existingBooking = await db.bookings.findFirst({
            where: {
                lawyer_id: data.lawyer_id,
                date: data.date,
                booking_status: {
                    notIn: ["Cancelled"]
                }
            }
        });
        // Check if a conflicting booking exists, if yes reject the request
        //return error message with status code (409)
        if (existingBooking) {
            throw new ErrorResponse("The selected date is already booked for the selected lawyer.", 409);
        }
        // create the booking if no conflicts
        const booking = await db.bookings.create({
            data: {
                user_id: data.user_id,
                lawyer_id: data.lawyer_id,
                date: data.date,
                notes: data.notes,
                payment_status: "Pending Payment",
                booking_status: "Pending"
            }
        });
        return booking;
    } catch (err) {
        throw err;
    }
};

module.exports = { createBooking };