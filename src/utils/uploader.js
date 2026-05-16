const multer = require("multer");
// const cloudinary = require("../config/cloudinary");
const minioClient = require("../config/minio");
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

const storage = multer.memoryStorage();

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
    fileSize: 10 * 1024 * 1024,
  },
});

const uploadToMinio = async (req) => {
  const folder = FOLDER_MAP[req.body.context] ?? "case-documents";
  const fileName = `${folder}/${Date.now()}-${req.file.originalname.replace(/\s+/g, "_")}`;
  const bucket = process.env.MINIO_BUCKET_NAME;

  await minioClient.putObject(
    bucket,
    fileName,
    req.file.buffer,
    req.file.size,
    { "Content-Type": req.file.mimetype },
  );

  return `http://${process.env.MINIO_END_POINT}:${process.env.MINIO_PORT}/${bucket}/${fileName}`;
};

module.exports = { upload, uploadToMinio };