const { db } = require("../config/db");

// GET ALL ACTIVE LAWYERS
const getAllLawyers = async () => {
  return await db.lawyer_profiles.findMany({
    where: {
      is_active: true,
    },
    include: {
      lawyer_applications: {
        include: {
          users: {
            select: {
              id: true,
              first_name: true,
              second_name: true,
              email: true,
            },
          },
        },
      },
    },
  });
};

// GET SINGLE LAWYER
const getLawyerById = async (lawyerId) => {
  return await db.lawyer_profiles.findUnique({
    where: {
      id: lawyerId,
    },
    include: {
      lawyer_applications: {
        include: {
          users: {
            select: {
              id: true,
              first_name: true,
              second_name: true,
              email: true,
            },
          },
        },
      },
    },
  });
};

module.exports = {
  getAllLawyers,
  getLawyerById,
};