const { db } = require("../config/db");
const cloudinary = require("../config/cloudinary");
const ErrorResponse = require("../utils/ErrorObj");


// Extracts Cloudinary public_id from a secure URL
// "https://res.cloudinary.com/xxx/image/upload/v123/case-documents/abc.pdf"
// → "case-documents/abc"
const extractPublicId = (fileUrl) => {
  const match = fileUrl.match(/\/upload\/v\d+\/(.+)\.[^.]+$/);
  return match ? match[1] : null;
};

// POST /api/documents/upload
const uploadDocument = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(new ErrorResponse("No file received", 400));
    }

    const { user_id, booking_id } = req.body;

    if (!user_id || !booking_id) {
      return next(new ErrorResponse("user_id and booking_id are required", 400));
    }

    const document = await prisma.documents.create({
      data: {
        file_url: req.file.path,
        user_id,
        booking_id,
      },
    });

    res.status(201).json({ success: true, data: document });
  } catch (error) {
    if (error.code === "P2003") {
      return next(new ErrorResponse("Invalid user_id or booking_id", 404));
    }
    next(error);
  }
};

// GET /api/documents/:id
const getDocumentById = async (req, res, next) => {
  try {
    const document = await prisma.documents.findUnique({
      where: { id: req.params.id },
    });

    if (!document) {
      return next(new ErrorResponse("Document not found", 404));
    }

    res.status(200).json({ success: true, data: document });
  } catch (error) {
    next(error);
  }
};

// GET /api/documents?user_id=&booking_id=
const getDocuments = async (req, res, next) => {
  try {
    const { user_id, booking_id } = req.query;

    if (!user_id && !booking_id) {
      return next(
        new ErrorResponse("Provide at least one query param: user_id or booking_id", 400)
      );
    }

    const where = {};
    if (user_id) where.user_id = user_id;
    if (booking_id) where.booking_id = booking_id;

    const documents = await prisma.documents.findMany({
      where,
      orderBy: { uploaded_at: "desc" },
    });

    res.status(200).json({ success: true, count: documents.length, data: documents });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/documents/:id
const deleteDocument = async (req, res, next) => {
  try {
    const document = await prisma.documents.findUnique({
      where: { id: req.params.id },
    });

    if (!document) {
      return next(new ErrorResponse("Document not found", 404));
    }

    const publicId = extractPublicId(document.file_url);

    if (publicId) {
      await cloudinary.uploader.destroy(publicId, { resource_type: "auto" });
    }

    await prisma.documents.delete({ where: { id: req.params.id } });

    res.status(200).json({ success: true, message: "Document deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadDocument, getDocumentById, getDocuments, deleteDocument };