const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = require("../config/s3");
const ErrorResponse = require("./ErrorObj");

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const FOLDER_MAP = {
  lawyer_application: "lawyer-applications",
  case_document: "case-documents",
};

const storage = multerS3({
  s3,
  bucket: process.env.AWS_S3_BUCKET_NAME,
  contentType: multerS3.AUTO_CONTENT_TYPE, // handles PDFs, images, Word docs
  key: (req, file, cb) => {
    const folder = FOLDER_MAP[req.body.context] ?? "case-documents";
    const key = `${folder}/${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`;
    cb(null, key);
  },
});

const fileFilter = (req, file, cb) => {
  if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new ErrorResponse(
        `Unsupported file type: ${file.mimetype}. Allowed: jpg, png, pdf, doc, docx`,
        415,
      ),
      false,
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