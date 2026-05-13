const ErrorResponse = require("../utils/ErrorObj");
const {
  getRecentChats,
  getUpcomingBookings,
  getRecentDocument,
} = require("../repositories/dashboardRepository");

// GET /api/dashboard/user-summary
const getUserSummary = async (req, res, next) => {
  try {
    const { user_id } = req.query;

    if (!user_id) {
      return next(new ErrorResponse("user_id is required", 400));
    }

    const [recentChats, upcomingBookings, recentDocument] = await Promise.all([
      getRecentChats(user_id),
      getUpcomingBookings(user_id),
      getRecentDocument(user_id),
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