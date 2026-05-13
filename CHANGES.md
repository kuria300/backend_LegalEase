# LegalEase Chatbot — What Was Built

## Overview
An AI-powered legal chatbot for Kenyan law built on top of OpenAI's GPT-4o model. The system handles text-based chat, document uploads, and conversation history — with guest limits to encourage registration.

---

## Files

### `src/utils/legalPrompts.js`
Contains two AI system prompts:
- `LEGAL_SYSTEM_PROMPT` — defines the AI's role as a Kenyan legal assistant. Covers land, employment, family, criminal and business law. Structures every response into: plain language explanation, relevant Kenyan law, user rights, and next steps.
- `DOCUMENT_ANALYSIS_PROMPT` — instructs the AI on how to analyze uploaded legal documents, identifying document type, key legal points, red flags, and recommendations.

---

### `src/services/chatService.js`
Handles chat interactions with the OpenAI API.
- Validates that the user message is not empty
- Builds the messages array using `LEGAL_SYSTEM_PROMPT` as context, followed by conversation history and the user's message
- Calls `gpt-4o` with a 2500 token limit
- Returns the AI reply, model used, and usage stats
- Handles OpenAI-specific errors: insufficient quota, invalid API key, and rate limiting (429)

---

### `src/services/ocrService.js`
Extracts text from uploaded files using `tesseract.js` for images and `pdf-parse` for PDFs.
- `extractFromPDF` — extracts text and page count from PDF files
- `extractFromImage` — uses Tesseract OCR to extract text from JPEG/PNG images
- `extractText` — determines file type from MIME type and calls the appropriate extraction method

---

### `src/services/documentService.js`
Analyzes uploaded legal documents using OCR and OpenAI.
- Passes the file to `ocrService` to extract text
- Validates that the extracted text is long enough for analysis (minimum 50 characters)
- Sends the extracted text to `gpt-4o` using `DOCUMENT_ANALYSIS_PROMPT`
- Returns file name, file type, extracted text, a preview, page count, and the AI analysis

---

### `src/controllers/chatController.js`
Controls all chatbot HTTP request handling. Contains 5 functions:
- `handleChatMessage` — receives a message, sends it to `chatService`, saves to DB if user is logged in, and tracks remaining messages for guests
- `uploadDocument` — receives an uploaded file, sends it to `documentService`, saves analysis to DB if user is logged in
- `getChatHistory` — fetches the last 50 chat messages for a logged in user
- `getDocumentHistory` — fetches the last 20 document analyses for a logged in user
- `clearHistory` — deletes all chat history for a logged in user

Guest users are limited to 4 messages before being prompted to register or login.

---

### `src/routes/chatRoutes.js`
Defines the API endpoints for the chatbot:

| Method | Route | Description |
|---|---|---|
| POST | `/api/chat/message` | Send a chat message |
| POST | `/api/chat/upload-document` | Upload a document for analysis |
| GET | `/api/chat/history/:userId` | Get chat history |
| GET | `/api/chat/documents/:userId` | Get document history |
| POST | `/api/chat/clear` | Clear chat history |

Each route applies the appropriate middleware: rate limiting, input sanitization, user validation, message limit checks, and file upload handling.

---

## Middleware Used
- `rateLimiter.js` — limits chat to 50 requests and uploads to 10 requests per 15 minutes per IP
- `messageLimit.js` — limits guests to 4 messages per session
- `fileUpload.js` — handles file uploads, accepts PDF, Word, JPEG, PNG up to 10MB
- `inputSanitization.js` — sanitizes and validates input before processing
- `errorHandler.js` — catches all errors and returns `{ success: false, error: "..." }`

---

## Dependencies
```bash
npm install openai tesseract.js pdf-parse multer express-rate-limit express-session
```

---

### `src/config/openai.js`
Initializes the OpenAI client using `OPENAI_API_KEY` from `.env`.
- Exports `openai` — the initialized client used by `chatService` and `documentService`
- Exports `testConnection` — calls `openai.models.list()` on startup to verify the API key is valid and the connection is working
- `testConnection` is called automatically when the file is loaded
