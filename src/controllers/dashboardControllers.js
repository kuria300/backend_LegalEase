// const prisma = require("../config/db");
const { db: prisma } = require("../config/db");
const ErrorResponse = require("../utils/ErrorObj");

// GET /api/dashboard/user-summary
const getUserSummary = async (req, res, next) => {
  try {
    const { user_id } = req.query;

    if (!user_id) {
      return next(new ErrorResponse("user_id is required", 400));
    }

    // Run all queries in parallel
    const [recentChats, upcomingBookings, recentDocument] = await Promise.all([

      // 3 most recent chats
      prisma.chatbots.findMany({
        where: { user_id },
        orderBy: { id: "desc" },
        take: 3,
      }),

      // 2 upcoming bookings
      prisma.bookings.findMany({
        where: {
          user_id,
          booking_status: { in: ["PENDING", "CONFIRMED"] },
          date: { gte: new Date() },
        },
        orderBy: { date: "asc" },
        take: 2,
      }),

      // 1 most recent document
      prisma.documents.findFirst({
        where: { user_id },
        orderBy: { uploaded_at: "desc" },
      }),

    ]);

    res.status(200).json({
      success: true,
      data: {
        recent_chats: recentChats,
        upcoming_bookings: upcomingBookings,
        recent_document: recentDocument,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserSummary };