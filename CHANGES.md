# Changes Made to app.js

## What was added
A 404 catch-all middleware was added before the `errorHandler` middleware:

```js
app.use((req, res, next) => next(new ErrorResponse('Route not found', 404)))
```

## Why
Express by default returns an HTML response for unknown routes. This middleware catches any request that doesn't match a defined route and passes it to `errorHandler`, which returns a consistent JSON response:

```json
{ "success": false, "error": "Route not found" }
```
