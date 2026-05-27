const express = require('express');
const router = express.Router();
const multer = require('multer');
const formDataParser = multer(); // For parsing FormData from frontend
const chatController = require('../controllers/chatController');
const { upload, handleMulterError } = require('../middleware/fileUpload');
const { checkMessageLimit } = require('../middleware/messageLimit');
const { chatLimiter, uploadLimiter } = require('../middleware/rateLimiter');
const { sanitizeInput, validateUserId } = require('../middleware/inputSanitization');
const { authenticate } = require('../middleware/auth.middleware');

// Public chat route - for homepage, no auth required
// chatLimiter - limits to 50 requests per 15 minutes per IP to prevent spamming
// sanitizeInput - trims the message to prevent XSS attacks
// checkMessageLimit - limits guests to 2 messages before prompting to login
// handleChatMessage - sends the message to OpenAI and returns the AI reply
// formDataParser.none() - parses FormData from frontend (supports file uploads)
router.post(
    '/message/public',
    formDataParser.none(),  // ← FIX: Parses FormData so req.body is defined
    chatLimiter,
    sanitizeInput,
    checkMessageLimit,
    chatController.handleChatMessage
);

// Authenticated chat route - for logged in users, no message limit
// authenticate - verifies the JWT token from Hillary's middleware
// chatLimiter - limits to 50 requests per 15 minutes per IP to prevent spamming
// sanitizeInput - trims the message to prevent XSS attacks
// handleChatMessage - sends the message to OpenAI and returns the AI reply
router.post(
    '/message',
    authenticate,
    chatLimiter,
    sanitizeInput,
    chatController.handleChatMessage
);

// Route to upload a legal document for AI analysis - requires auth
// uploadLimiter - limits to 10 uploads per 15 minutes per IP
// sanitizeInput - sanitizes any text input in the request
// upload.single('document') - handles the file upload using multer, accepts single file
// handleMulterError - catches multer errors like file too large or wrong file type
// uploadDocument - extracts text from the document and sends it to OpenAI for analysis
router.post(
    '/upload-document',
    //authenticate,
    uploadLimiter,
    upload.single('document'),
    handleMulterError,
    chatController.uploadDocument
);

// Route to get chat history for a logged in user - requires auth
// validateUserId - ensures the userId in the URL is a valid UUID
// getChatHistory - fetches the last 50 chat messages for the user from the database
router.get(
    '/history',
    authenticate,
    validateUserId,
    chatController.getChatHistory
);

// Route to get document upload history for a logged in user - requires auth
// validateUserId - ensures the userId in the URL is a valid UUID
// getDocumentHistory - fetches the last 20 document analyses for the user from the database
router.get(
    '/documents/:userId',
    authenticate,
    validateUserId,
    chatController.getDocumentHistory
);

// Route to delete chat history for a logged in user - requires auth
router.delete(
    '/history/:userId',
    authenticate,
    validateUserId,
    chatController.clearHistory
);

// Route to clear chat history for a logged in user - requires auth
// validateUserId - ensures the userId in the request body is a valid UUID
// clearHistory - deletes all chat messages for the user from the database
router.post(
    '/clear',
    authenticate,
    validateUserId,
    chatController.clearHistory
);

module.exports = router;