const { db } = require("../config/db");
const ErrorResponse = require("../utils/ErrorObj");

const createBooking = async (data) => {
    try {
        // Check for double booking -> same date/time
        // Ignore cancelled bookings
        const existingBooking = await db.bookings.findFirst({
            where: {
                lawyer_id: data.lawyer_id,
                date: data.date,
                booking_status: {
                    notIn: ["CANCELLED"]
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
                payment_status: "PENDING",
                booking_status: "PENDING"
            }
        });
        return booking;
    } catch (err) {
        throw err;
    }
};
// User booking routes

const findBookingWithLawyerProfile = async(bookingId) => {
    return db.bookings.findUnique({
        where: {
            id: bookingId
        },
        include: {
            lawyer_profile: true
        }
    });
};

// Fetch all bookings belonging to a specific user
const getUserBookings = async (user_id, page, limit) => {
    try {
        // determine how many records to skip based on the current page
        const skip = (page - 1) * limit;

        // Get total count of user bookings for pagination metadata
        const totalBookings = await db.bookings.count({
            where: {
                user_id: user_id
            }
        });

        // filter the bookings by the authenticated user's ID
        const bookings = await db.bookings.findMany({
            where: {
                user_id: user_id
            },
            // include lawyer profile details in the response
            include: {
                users_bookings_lawyer_idTousers: {
                    select: {
                        first_name: true,
                        second_name: true,
                        email: true
                    }
                },
                // include payment details if they exist
                payments: true
            },
            // show most recent bookings first
            orderBy: {
                date: "desc"
            },
            skip: skip,
            // limit records to the page size
            take: limit
        });
        // If user doesn't have any bookings, return an empty array
        if (!bookings.length){
            return {bookings: [], totalBookings: 0, totalPages: 0, currentPage: page};
        }
        // calculate the total no. of pages
        const totalPages = Math.ceil(totalBookings / limit);

        return { bookings, totalBookings, totalPages, currentPage: page};
    } catch (err) {
        throw err;
    }
};

// function to fetch all bookings assigned to a specific lawyer.
const getLawyerBookings = async (lawyer_id, page, limit) => {
    try {
        // determine records to skip based on the current page
        const skip = (page -1) * limit;
        // Get total count of lawyer bookings for pagination metadata
        const totalBookings = await db.bookings.count({
            where: {
                // filter bookings by authenticated lawyer's id.
                lawyer_id: lawyer_id
            }
        });
        const bookings = await db.bookings.findMany({
            where: {
                lawyer_id: lawyer_id
            },
            include: {
                // Include user details for the lawyer to know who booked
                users_bookings_user_idTousers: {
                    select: {
                        first_name: true,
                        second_name: true,
                        email: true
                    }
                },
                // Include payment details for each booking
                payments: true
            },
            orderBy: {
                date: "desc"
            },
            skip: skip,
            // Limit records to the page size
            take: limit
        });

        // If no bookings found, return an empty array
        if(!bookings.length){
            return { bookings: [], totalBookings: 0, totalPages: 0, currentPage: page };
        }
        // calculate total number of pages
        const totalPages = Math.ceil(totalBookings / limit);

        return { bookings, totalBookings, totalPages, currentPage: page };
    } catch (err) {
        throw err;
    }
};
// Fetch single booking by ID
const getBookingById = async (booking_id)=>{
    try {
        const booking = await db.bookings.findUnique({
            where: {
                id: booking_id // find booking by it's primary key.
            },
            //include user details
            include: {
                users_bookings_user_idTousers: {
                    select: {
                        first_name: true,
                        second_name: true,
                        email: true
                    }
                },
                //include lawyer details
                users_bookings_lawyer_idTousers: {
                    select: {
                        first_name: true,
                        second_name: true,
                        email: true
                    }
                },
                //include payment details if they exist
                payments: true
            }    
        });
        if(!booking){
            return null
        }
        return booking;
    } catch (err) {
        throw err; 
    }
};

const updateBookingStatus = async(booking_id, booking_status) => {
    try {
        const updatedBooking = await db.bookings.update({
            where: {
                id: booking_id
            },
            data: {
                booking_status: booking_status
            }
        });
        return updatedBooking;
    } catch (err) {
        throw err;
    }
};
// function to delete a booking by ID
const deleteBooking = async(booking_id) =>{
    try {
        const deletedBooking = await db.bookings.delete({
            where: {
                id: booking_id
            }
        });
        return deletedBooking;
    } catch (err) {
        throw err;
    }
}

// Function to update payment and booking status
const updatePaymentBookingStatus = async (booking_status, payment_status, booking_id) => {
    try {
        //check if booking exists before updating
        const existingBooking = await db.bookings.findUnique({
            where: {
                // find specific booking by ID
                id: booking_id
            }
        });
        // If booking not found, throw a 404 error
        if(!existingBooking){
            throw new ErrorResponse(`Booking with ID: ${booking_id} not found`, 404)
        }
        //update both payment_status and booking_status
        const updatedBooking = await db.bookings.update({
            where: {
                //update specific booking by ID
                id: booking_id
            },
            data: {
                //update payment status based on M-pesa webhook result
                payment_status: payment_status,
                // update booking status based on the payment status
                booking_status: booking_status
            }
        });
        return updatedBooking; 
    } catch (err) {
        throw err;
    }
}



module.exports = { 
    createBooking, 
    getUserBookings, 
    getLawyerBookings, 
    getBookingById,
    updateBookingStatus,
    deleteBooking,
    updatePaymentBookingStatus,
    findBookingWithLawyerProfile
};
