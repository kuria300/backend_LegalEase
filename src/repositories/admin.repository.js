const { db } = require("../config/db");


// FIND APPLICATION
const findUnique = async (applicationId) => {
  return await db.lawyer_applications.findUnique({
    where: {
      id: applicationId,
    },
  });
};


// CREATE LAWYER PROFILE
const createLawyer = async (tx, data) => {
  return await tx.lawyer_profiles.create({
    data: {
      lawyer_application_id: data.lawyer_application_id,
      category: data.category,
      phone_number: data.phone_number || null,
      description: data.description,
      experience: data.experience,
      consultation_fee: data.consultation_fee,
      is_active: data.is_active,
    },
  });
};


module.exports = {
  findUnique,
  createLawyer,
};