# Installation Guide

Run the following command to install all dependencies required for the chatbot feature:

```bash
npm install openai multer express-rate-limit express-session validator tesseract.js pdf-parse
```

## What each package does

| Package | File | Purpose |
|---|---|---|
| `openai` | `src/config/openai.js`, `src/services/chatService.js`, `src/services/documentService.js` | Connects to OpenAI GPT-4o for chat and document analysis |
| `multer` | `src/middleware/fileUpload.js` | Handles file uploads from the client |
| `express-rate-limit` | `src/middleware/rateLimiter.js` | Limits requests per IP to prevent spam and DDoS |
| `express-session` | `app.js` | Tracks guest message count per session for message limiting |
| `validator` | `src/middleware/inputSanitization.js` | Sanitizes and validates user input and UUIDs |
| `tesseract.js` | `src/services/ocrService.js` | Extracts text from uploaded images using OCR |
| `pdf-parse` | `src/services/ocrService.js` | Extracts text from uploaded PDF files |
