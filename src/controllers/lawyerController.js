const LawyerRepository = require("../repositories/lawyer.repository");
const ErrorResponse = require("../utils/ErrorObj");

const applyToBeLawyer = async (req, res, next) => {
  const user_id= req.user.userId

  const { file_url, lsk_number, description, consultation_fee, category, experience, phone_number, profile_picture_url } = req.body;

  try {
    // check existing application
    const existingApp = await LawyerRepository.findExistingApplication(
      user_id,
      lsk_number,
      description,
      consultation_fee,
      category,
      experience,
      phone_number,
      profile_picture_url,
    );

    if (existingApp) {
      throw new ErrorResponse(
        "An application with this User ID or LSK Number already exists",
        400
      );
    }

    // create application
    const application = await LawyerRepository.createApplication({
      user_id,
      file_url,
      lsk_number,
      description,
      consultation_fee,
      category,
      experience,
      phone_number,
      profile_picture_url,  
    });

    res.status(201).json({
      message: "Application submitted successfully! Awaiting admin review.",
      applicationId: application.id,
    });
  } catch (error) {
    console.error("LE-202 Error:", error);
    next(error);
  }
};

module.exports = { applyToBeLawyer };