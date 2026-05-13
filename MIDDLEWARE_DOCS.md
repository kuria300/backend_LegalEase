# Middleware & Utilities Documentation

## Installation

```bash
npm install
```

## Running the Server

```bash
# Development
npm run dev

# Production
npm start
```

## Environment Variables
Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `PORT` | Port the server runs on (default: 3000) |
| `NUMLESSCPUS` | How many CPUs to leave unused for the cluster (default: 1) |
| `DATABASE_URL` | PostgreSQL connection string |
| `OPENAI_API_KEY` | Your OpenAI API key |

---

## Middleware

### `src/midlleware/errorHandler.js`
Global error handler. Must be registered last in `app.js`.

Catches all errors passed via `next(err)` and returns:
```json
{ "success": false, "error": "error message" }
```

**Dependencies:** none (built-in to Express)

---

### `src/midlleware/fileUpload.js`
Handles file uploads using `multer` with memory storage.

- Accepts: `PDF`, `Word (.doc, .docx)`, `JPEG`, `PNG`
- Max file size: `10MB`
- Rejects invalid types with a `400` error
- `handleMulterError` must be registered after `upload` in routes

**Install:**
```bash
npm install multer
```

**Usage in a route:**
```js
const { upload, handleMulterError } = require('../midlleware/fileUpload');

router.post('/upload', upload.single('file'), handleMulterError, controller);
```

---

### `src/midlleware/messageLimit.js`
Limits unauthenticated (guest) users to **4 messages** per session.

- If `userId` is present in `req.body` (logged in user) → no limit applied
- If guest exceeds 4 messages → returns `403` error prompting them to register/login
- Attaches `req.remainingMessages` for use in responses

**Dependencies:** `express-session` must be set up in `app.js`

**Install:**
```bash
npm install express-session
```

---

### `src/midlleware/rateLimiter.js`
Limits requests per IP using `express-rate-limit`.

| Limiter | Max Requests | Window |
|---|---|---|
| `chatLimiter` | 50 | 15 minutes |
| `uploadLimiter` | 10 | 15 minutes |

Exceeding the limit returns a `429` error via `errorHandler`.

**Install:**
```bash
npm install express-rate-limit
```

**Usage in a route:**
```js
const { chatLimiter, uploadLimiter } = require('../midlleware/rateLimiter');

router.post('/chat', chatLimiter, controller);
router.post('/upload', uploadLimiter, controller);
```

---

## Utilities

### `src/utils/legalPrompts.js`
Contains the AI system prompts for the LegalEase assistant.

| Export | Purpose |
|---|---|
| `LEGAL_SYSTEM_PROMPT` | Main system prompt — defines the AI's role, scope, and response structure for Kenyan law |
| `DOCUMENT_ANALYSIS_PROMPT` | Prompt for analyzing uploaded legal documents |

**No installation required.**

---

### `src/config/openai.js`
Initializes the OpenAI client using `OPENAI_API_KEY` from `.env`.

Exports:
- `openai` — the initialized client to use in services
- `testConnection` — call this on server start to verify the API key works

**Install:**
```bash
npm install openai
```
