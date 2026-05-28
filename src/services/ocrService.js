// src/services/ocrService.js
const Tesseract     = require('tesseract.js');
// pdf-parse v1.1.1 — stable function-based API (v2 has CJS bugs)
// Run: npm install pdf-parse@1.1.1
const pdfParse = require('pdf-parse');
const ErrorResponse = require('../utils/ErrorObj.js');

class OCRService {

    async extractFromPDF(buffer) {
        try {
            console.log('PDF buffer length:', buffer?.length);
            console.log('PDF magic bytes:', buffer?.slice(0, 4).toString());

            const buf = Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer);

            const data = await pdfParse(buf);

            return {
                text:    data.text,
                pages:   data.numpages,
                success: true,
            };
        } catch (error) {
            console.error('PDF extraction raw error:', error.message);
            throw new ErrorResponse(
                'Failed to extract text from PDF. File may be corrupted, password-protected, or unsupported.',
                400
            );
        }
    }

    async extractFromImage(buffer) {
        try {
            const buf = Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer);
            const result = await Tesseract.recognize(buf, 'eng');
            return {
                text:       result.data.text,
                confidence: result.data.confidence,
                success:    true,
            };
        } catch (error) {
            console.error('OCR extraction raw error:', error.message);
            throw new ErrorResponse(
                'Failed to extract text from image. File may be corrupted or unsupported.',
                400
            );
        }
    }

    async extractText(file) {
        const { mimetype, buffer } = file;

        if (!buffer || buffer.length === 0) {
            throw new ErrorResponse(
                'File buffer is empty. Ensure multer is using memoryStorage().',
                400
            );
        }

        if (mimetype === 'application/pdf') {
            return await this.extractFromPDF(buffer);
        }

        if (mimetype.startsWith('image/')) {
            return await this.extractFromImage(buffer);
        }

        throw new ErrorResponse(
            'Unsupported file type. Only PDF and image files are supported.',
            400
        );
    }
}

module.exports = new OCRService();