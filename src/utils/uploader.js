const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const ErrorResponse = require("./ErrorObj");

// Allowed MIME types — both document types and images (for lawyer ID scans etc.)
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

// Maps the incoming context field to a Cloudinary folder
// Keeps uploads loosely organised without complex nesting (per MVP boundary)
const FOLDER_MAP = {
  lawyer_application: "lawyer-applications",
  case_document:      "case-documents",
};

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const folder = FOLDER_MAP[req.body.context] ?? "case-documents";

    return {
      folder,
      resource_type: "auto",   // handles PDFs, images, Word docs
      public_id: `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`,
      allowed_formats: ["jpg", "jpeg", "png", "pdf", "doc", "docx"],
    };
  },
});

const fileFilter = (req, file, cb) => {
  if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    // Passes error into multer's error pipeline → caught by errorHandler
    cb(
      new ErrorResponse(
        `Unsupported file type: ${file.mimetype}. Allowed: jpg, png, pdf, doc, docx`,
        415
      ),
      false
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB hard cap
  },
});

module.exports = upload;