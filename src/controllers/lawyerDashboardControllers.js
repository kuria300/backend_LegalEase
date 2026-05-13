const ErrorResponse = require("../utils/ErrorObj");
const {
  getUpcomingBookings,
  getRecentCompletedBookings,
  getLawyerProfile,
} = require("../repositories/lawyerDashboardRepository");

// GET /api/lawyer-dashboard/summary
const getLawyerSummary = async (req, res, next) => {
  try {
    const { lawyer_id } = req.query;

    if (!lawyer_id) {
      return next(new ErrorResponse("lawyer_id is required", 400));
    }

    const [upcomingBookings, recentCompletedBookings, lawyerProfile] = await Promise.all([
      getUpcomingBookings(lawyer_id),
      getRecentCompletedBookings(lawyer_id),
      getLawyerProfile(lawyer_id),
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