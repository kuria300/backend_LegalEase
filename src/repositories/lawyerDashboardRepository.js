const { db: prisma } = require("../config/db");

const getUpcomingBookings = (lawyer_id) =>
  prisma.bookings.findMany({
    where: {
      lawyer_id,
      booking_status: { in: ["PENDING", "CONFIRMED"] },
      date: { gte: new Date() },
    },
    orderBy: { date: "asc" },
    take: 3,
  });

const getRecentCompletedBookings = (lawyer_id) =>
  prisma.bookings.findMany({
    where: {
      lawyer_id,
      booking_status: "COMPLETED",
    },
    orderBy: { date: "desc" },
    take: 3,
  });

const getLawyerProfile = (lawyer_id) =>
  prisma.lawyer_profiles.findFirst({
    where: {
      lawyer_applications: {
        user_id: lawyer_id,
      },
    },
  });

module.exports = {
  getUpcomingBookings,
  getRecentCompletedBookings,
  getLawyerProfile,
};