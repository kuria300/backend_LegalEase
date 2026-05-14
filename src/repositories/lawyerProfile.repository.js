const { db } = require("../config/db");


// UPDATE LAWYER PROFILE
const updateLawyerProfile = async (id, data) => {

  return await db.lawyer_profiles.update({
    where: {
      id,
    },

    data: {
      category: data.category,
      phone_number: data.phone_number,
      description: data.description,
      experience: data.experience,
      consultation_fee: data.consultation_fee,
    },
  });
};


// UPDATE ACTIVE STATUS
const updateLawyerStatus = async (id, is_active) => {

  return await db.lawyer_profiles.update({
    where: {
      id,
    },

    data: {
      is_active,
    },
  });
};


module.exports = {
  updateLawyerProfile,
  updateLawyerStatus,
};