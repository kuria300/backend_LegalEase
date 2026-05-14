const ErrorResponse = require("../utils/ErrorObj");

const {
  getAllLawyers,
  getLawyerById,
} = require("../repositories/lawyerMarketplace.repository");


// GET ALL LAWYERS
exports.fetchAllLawyers = async (req, res, next) => {
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
exports.fetchLawyerById = async (req, res, next) => {
  try {
    const lawyerId= req.params.id
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
    next(error);
  }
};