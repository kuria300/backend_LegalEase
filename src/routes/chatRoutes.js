const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { upload, handleMulterError } = require('../middleware/fileUpload');
const { checkMessageLimit } = require('../middleware/messageLimit');
const { chatLimiter, uploadLimiter } = require('../middleware/rateLimiter');
const { sanitizeInput, validateUserId } = require('../middleware/inputSanitization');

router.post(
    '/message', 
    chatLimiter,
    sanitizeInput,
    validateUserId,
    checkMessageLimit,
    chatController.handleChatMessage
);

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

router.get(
    '/history/:userId',
    validateUserId,
    chatController.getChatHistory
);

router.get(
    '/documents/:userId',
    validateUserId,
    chatController.getDocumentHistory
);

router.post(
    '/clear',
    validateUserId,
    chatController.clearHistory
);

module.exports = router;