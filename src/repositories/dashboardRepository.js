const { db: prisma } = require("../config/db");

const getRecentChats = (user_id) =>
  prisma.chatbots.findMany({
    where: { user_id },
    orderBy: { id: "desc" },
    take: 3,
  });

const getUpcomingBookings = (user_id) =>
  prisma.bookings.findMany({
    where: {
      user_id,
      booking_status: { in: ["PENDING", "CONFIRMED"] },
      date: { gte: new Date() },
    },
    orderBy: { date: "asc" },
    take: 2,
  });

const getRecentDocument = (user_id) =>
  prisma.documents.findFirst({
    where: { user_id },
    orderBy: { uploaded_at: "desc" },
  });

module.exports = {
  getRecentChats,
  getUpcomingBookings,
  getRecentDocument,
};