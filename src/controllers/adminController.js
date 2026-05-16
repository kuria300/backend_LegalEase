const {db} = require ("../config/db");
const ErrorResponse = require ("../utils/ErrorObj");
const { findUnique, createLawyer}=require('../repositories/admin.repository')

module.exports.approveLawyer = async (req, res, next) => {
  const { applicationId } = req.body;

  try {
    const application = await findUnique(applicationId);

    if (!application) {
      throw new ErrorResponse("Application not found", 404);
    }

    const result = await db.$transaction(async (tx) => {

      // 1. CHECK IF ALREADY APPROVED (via profile existence)
      const existingProfile = await tx.lawyer_profiles.findUnique({
        where: { lawyer_application_id: application.id },
      });

      if (existingProfile) {
        throw new ErrorResponse("Application already approved", 400);
      }

      // 2. CREATE LAWYER PROFILE (This will show APPROVAL)
      const newProfile = await createLawyer(tx, {
      lawyer_application_id: application.id,
      category: application.category,
      phone_number: application.phone_number || null,
      description: application.description,
      experience: application.experience,
      consultation_fee: application.consultation_fee,
      is_active: true,
    });
      

      return {
        newProfile,
      };
    });
    

    res.status(200).json({
      success: true,
      message: "Lawyer approved successfully",
      data: result,
    });

  } catch (error) {
    console.error("LE-203 Error:", error);
    next(error.message);
  }
};