const ErrorResponse = require("../utils/ErrorObj");

const {
  getAllLawyers,
  getLawyerById,
  getLawyerByName,
  getLawyerByUserId
} = require("../repositories/lawyerMarketplace.repository");


// GET ALL LAWYERS
module.exports.fetchAllLawyers = async (req, res, next) => {
  try {
    const lawyers = await getAllLawyers();

    res.status(200).json({
      success: true,
      count: lawyers.length,
      data: lawyers,
    });

  } catch (error) {
    console.error("LE-204 Error:", error);
    next(error);
  }
};

// GET SINGLE LAWYER
module.exports.fetchLawyerById = async (req, res, next) => {
  try {

    const lawyerId = req.params.id;

    const lawyer = await getLawyerById(lawyerId);

    if (!lawyer) {
      return next(new ErrorResponse("Lawyer not found", 404));
    }

    res.status(200).json({
      success: true,
      data: lawyer,
    });

  } catch (error) {
    console.error("LE-204 Error:", error);
    next(error.message);
  }
};


// GET LAWYER BY NAME
module.exports.fetchLawyerByName = async (req, res, next) => {
  try {

    const { name } = req.params;

    const lawyers = await getLawyerByName(name);

    if (!lawyers || lawyers.length === 0) {
      return next(
        new ErrorResponse("No lawyer found with that name", 404)
      );
    }

    res.status(200).json({
      success: true,
      count: lawyers.length,
      data: lawyers,
    });

  } catch (error) {
    console.error("LE-204 Error:", error);
    next(error.message);
  }
};


module.exports.fetchLawyerByUserId = async(req, res, next) => {
  try {
    const userId = req.user.userId; // from JWT middleware
 
    const profile = await getLawyerByUserId(userId)
 
    if (!profile) {
      return next(new ErrorResponse("Lawyer profile not found", 404));
    }
 
    return res.status(200).json({ success: true, data: profile });
  } catch (err) {
    next(err);
  }

}