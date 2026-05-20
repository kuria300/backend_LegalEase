const { db } = require("../config/db");
const ErrorResponse = require("../utils/ErrorObj");

const createBooking = async ({ user_id, lawyer_id, booking_date, booking_time, notes }) => {
    try {
        // Check for double booking -> same date/time
        // Ignore cancelled bookings
        console.log("Service received booking_date:", booking_date); 

        const existingBooking = await db.bookings.findFirst({
            where: {
                lawyer_id: lawyer_id,
                booking_date: new Date(booking_date),
                booking_time: booking_time,
                booking_status: {
                    notIn: ["CANCELLED"]
                }
            }
        });
        // Check if a conflicting booking exists, if yes reject the request
        //return error message with status code (409)
        if (existingBooking) {
            throw new ErrorResponse("This slot is already booked for the selected lawyer.", 409);
        }
        // create the booking if no conflicts
        const booking = await db.bookings.create({
            data: {
                user_id: user_id,
                lawyer_id: lawyer_id,
                booking_date: new Date(booking_date),
                booking_time: booking_time,
                notes: notes,
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
            users_bookings_lawyer_idTousers: {
            select: {
                id: true,
                first_name: true,
                second_name: true,

                lawyer_applications: {
                select: {
                    lawyer_profiles: {
                    select: {
                        consultation_fee: true,
                        category: true,
                        experience: true,
                    },
                    },
                },
                },
            },
            },
        },
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
                booking_date: "desc"
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
                booking_date: "desc"
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

// function to reschedule a confirmed and paid booking to a new date and time
const rescheduleBooking = async ({booking_id, new_booking_date, new_booking_time}) => {
    try {
        // Get the lawyer_id from the existing booking
        const existingBooking = await db.bookings.findUnique({
            where: { id: booking_id },
            select: { lawyer_id: true }
        });

        // Check for double booking at the new date and time
        const conflictingBooking = await db.bookings.findFirst({
            where: {
                // Same lawyer as the booking being rescheduled
                lawyer_id: existingBooking.lawyer_id,
                // New date
                booking_date: new_booking_date,
                // New time slot
                booking_time: new_booking_time,
                // Ignore cancelled bookings
                booking_status: {
                    notIn: ["CANCELLED"]
                },
                // Exclude the current booking from the check
                NOT: {
                    id: booking_id
                }
            }
        });

        // If a conflicting booking exists reject the request
        if (conflictingBooking) {
            throw new ErrorResponse(
                "This time slot is already booked for the selected lawyer. Please select a different time slot.",
                409
            );
        }

        // Update the booking with the new date and time
        const rescheduledBooking = await db.bookings.update({
            where: {
                // Target the specific booking by ID
                id: booking_id
            },
            data: {
                // Update to new booking date
                booking_date: new_booking_date,
                // Update to new booking time
                booking_time: new_booking_time,
                // Keep booking status as CONFIRMED after rescheduling
                booking_status: "CONFIRMED"
            }
        });

        return rescheduledBooking;

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

module.exports = { 
    createBooking, 
    getUserBookings, 
    getLawyerBookings,
    rescheduleBooking, 
    getBookingById,
    deleteBooking,
    findBookingWithLawyerProfile
};
