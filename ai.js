// Middleware
const { upload, handleMulterError } = require('./src/middleware/fileUpload');
const { checkMessageLimit } = require('./src/middleware/messageLimit');
const { chatLimiter, uploadLimiter } = require('./src/middleware/rateLimiter');
const { sanitizeInput, validateUserId } = require('./src/middleware/inputSanitization');

// Config
const { openai, testConnection } = require('./src/config/openai');

// Services
const chatService = require('./src/services/chatService');
const documentService = require('./src/services/documentService');
const ocrService = require('./src/services/ocrService');

// Controllers
const chatController = require('./src/controllers/chatController');

// Routes
const chatRoutes = require('./src/routes/chatRoutes');

// Utils
const { LEGAL_SYSTEM_PROMPT, DOCUMENT_ANALYSIS_PROMPT } = require('./src/utils/legalPrompts');

module.exports = {
    // Middleware
    upload,
    handleMulterError,
    checkMessageLimit,
    chatLimiter,
    uploadLimiter,
    sanitizeInput,
    validateUserId,

    // Config
    openai,
    testConnection,

    // Services
    chatService,
    documentService,
    ocrService,

    // Controllers
    chatController,

    // Routes
    chatRoutes,

    // Utils
    LEGAL_SYSTEM_PROMPT,
    DOCUMENT_ANALYSIS_PROMPT,
};
