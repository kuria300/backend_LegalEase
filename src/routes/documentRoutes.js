const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/auth.middleware");

// documentRoutes.js
const { upload } = require("../utils/uploader");
const {
  uploadDocument,
  getDocumentById,
  getDocuments,
  deleteDocument,
} = require("../controllers/documentController");

// POST   /api/documents/upload
router.post("/upload/:booking_id", authenticate, upload.single("file"), uploadDocument);

// GET    /api/documents?user_id=&booking_id=
router.get("/", getDocuments);

// GET    /api/documents/:id
router.get("/:id", getDocumentById);

// DELETE /api/documents/:id
router.delete("/:id", deleteDocument);

module.exports = router;