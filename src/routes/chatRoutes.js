const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { upload, handleMulterError } = require('../middleware/fileUpload');
const { checkMessageLimit } = require('../middleware/messageLimit');
const { chatLimiter, uploadLimiter } = require('../middleware/rateLimiter');
const { sanitizeInput, validateUserId } = require('../middleware/inputSanitization');

// Route to send a chat message to the AI
// chatLimiter - limits to 50 requests per 15 minutes per IP to prevent spamming
// sanitizeInput - trims and escapes the message to prevent XSS attacks
// validateUserId - checks that userId is a valid UUID if provided
// checkMessageLimit - limits guests to 4 messages before prompting to register
// handleChatMessage - sends the message to OpenAI and returns the AI reply
router.post(
    '/message', 
    chatLimiter,
    sanitizeInput,
    validateUserId,
    checkMessageLimit,
    chatController.handleChatMessage
);

// Route to upload a legal document for AI analysis
// uploadLimiter - limits to 10 uploads per 15 minutes per IP
// sanitizeInput - sanitizes any text input in the request
// validateUserId - checks that userId is a valid UUID if provided
// checkMessageLimit - counts document uploads against the guest message limit
// upload.single('document') - handles the file upload using multer, accepts single file
// handleMulterError - catches multer errors like file too large or wrong file type
// uploadDocument - extracts text from the document and sends it to OpenAI for analysis
router.post(
    '/upload-document',
    uploadLimiter,
    sanitizeInput,
    validateUserId,
    checkMessageLimit,
    upload.single('document'),
    handleMulterError,
    chatController.uploadDocument
);

// Route to get chat history for a logged in user
// validateUserId - ensures the userId in the URL is a valid UUID
// getChatHistory - fetches the last 50 chat messages for the user from the database
router.get(
    '/history/:userId',
    validateUserId,
    chatController.getChatHistory
);

// Route to get document upload history for a logged in user
// validateUserId - ensures the userId in the URL is a valid UUID
// getDocumentHistory - fetches the last 20 document analyses for the user from the database
router.get(
    '/documents/:userId',
    validateUserId,
    chatController.getDocumentHistory
);

// Route to clear chat history for a logged in user
// validateUserId - ensures the userId in the request body is a valid UUID
// clearHistory - deletes all chat messages for the user from the database
router.post(
    '/clear',
    validateUserId,
    chatController.clearHistory
);

module.exports = router;
