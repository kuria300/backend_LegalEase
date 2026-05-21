const express = require("express");
const router = express.Router();
const  { upload,uploadToMinio } = require("../utils/uploader");
const { authenticate } = require("../middleware/auth.middleware")
const {
  uploadDocument,
  getDocumentById,
  getDocuments,
  deleteDocument,
  uploadFile,
} = require("../controllers/documentController");

// POST   /api/documents/upload
router.post("/upload/:booking_id", upload.single("file"), uploadDocument);

// GET    /api/documents?user_id=&booking_id=
router.get("/", getDocuments);

// GET    /api/documents/:id
router.get("/:id", getDocumentById);

// DELETE /api/documents/:id
router.delete("/:id", deleteDocument);

router.post("/upload-file", upload.single("document"), uploadFile)

module.exports = router;