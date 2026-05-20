const { db } = require("../config/db");

// GET ALL ACTIVE LAWYERS
const getAllLawyers = async () => {
  return await db.lawyer_profiles.findMany({
    where: {
      is_active: true,
    },
    select: {
      id: true,
      category: true,         // Required for card sub-headers like "Family & Divorce Law"
      experience: true,       //  Required for "12 Years Exp." badge
      location: true,         //  Required for "Westlands" location label
      consultation_fee: true, //  Required for price tier display ($$, $$$)
      bio: true,              //  Required for the profile about snippet
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

// GET SINGLE LAWYER BY ID
const getLawyerById = async (lawyerId) => {
  return await db.lawyer_profiles.findUnique({
    where: {
      id: lawyerId,
    },
    select: {
      id: true,
      category: true,
      experience: true,
      location: true,
      consultation_fee: true,
      bio: true,
      education: true,        // Pulls University degree history for profile view
      credentials: true,      // 👈Pulls LSK/High Court confirmation checkboxes
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

const getLawyerByName = async (name) => {
  return await db.lawyer_profiles.findMany({
    where: {
      is_active: true,
      lawyer_applications: {
        users: {
          OR: [
            { first_name: { contains: name, mode: "insensitive" } },
            { second_name: { contains: name, mode: "insensitive" } },
          ],
        },
      },
    },
    select: {
      id: true,
      category: true,
      experience: true,
      location: true,
      consultation_fee: true,
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
  getLawyerByName
};