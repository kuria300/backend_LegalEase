const ErrorResponse = require("../utils/ErrorObj");

const {
  updateLawyerProfile,
  updateLawyerStatus,
} = require("../repositories/lawyerProfile.repository");


// UPDATE LAWYER PROFILE
module.exports.editLawyerProfile = async (req, res, next) => {

  const { id } = req.params;

  try {

    const updatedProfile = await updateLawyerProfile(
      id,
      req.body
    );

    if (!updatedProfile) {
      throw new ErrorResponse("Lawyer profile not found", 404);
    }

    res.status(200).json({
      success: true,
      message: "Lawyer profile updated successfully",
      data: updatedProfile,
    });

  } catch (error) {

    console.error("LE-205 Error:", error);

    next(error);
  }
};


// UPDATE LAWYER ACTIVE STATUS
module.exports.changeLawyerStatus = async (req, res, next) => {

  const { id } = req.params;

  const { is_active } = req.body;

  try {

    const updatedStatus = await updateLawyerStatus(
      id,
      is_active
    );

    if (!updatedStatus) {
      throw new ErrorResponse("Lawyer profile not found", 404);
    }

    res.status(200).json({
      success: true,
      message: "Lawyer status updated successfully",
      data: updatedStatus,
    });

  } catch (error) {

    console.error("LE-205 Error:", error);

    next(error);
  }
};