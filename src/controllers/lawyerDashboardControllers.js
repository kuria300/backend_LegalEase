const { db: prisma } = require("../config/db");
const ErrorResponse = require("../utils/ErrorObj");

// GET /api/lawyer-dashboard/summary
const getLawyerSummary = async (req, res, next) => {
  try {
    const { lawyer_id } = req.query;

    if (!lawyer_id) {
      return next(new ErrorResponse("lawyer_id is required", 400));
    }

    // Run all queries in parallel
    const [upcomingBookings, recentCompletedBookings, lawyerProfile] = await Promise.all([

      // 3 upcoming bookings
      prisma.bookings.findMany({
        where: {
          lawyer_id,
          booking_status: { in: ["PENDING", "CONFIRMED"] },
          date: { gte: new Date() },
        },
        orderBy: { date: "asc" },
        take: 3,
      }),

      // 3 most recent completed bookings
      prisma.bookings.findMany({
        where: {
          lawyer_id,
          booking_status: "COMPLETED",
        },
        orderBy: { date: "desc" },
        take: 3,
      }),

      // Lawyer profile
      prisma.lawyer_profiles.findFirst({
        where: {
          lawyer_applications: {
            user_id: lawyer_id,
          },
        },
      }),

    ]);

    res.status(200).json({
      success: true,
      data: {
        upcoming_bookings: upcomingBookings,
        recent_completed_bookings: recentCompletedBookings,
        lawyer_profile: lawyerProfile,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getLawyerSummary };