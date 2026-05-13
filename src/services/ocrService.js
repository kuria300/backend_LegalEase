//in this file I'll work with the OCR Services where the ai will scan the image and extract the text from it. 
//I'll use the tesseract.js library for OCR processing. I'll create a function that takes an image as input and returns the extracted text.
//I'll also handle any errors that may occur during the OCR process.

const Tesseract = require('tesseract.js');
const ErrorResponse = require('../utils/ErrorObj.js');

// Function to perform OCR on an image and extract text
// let me use a class to define the OCRService and its method for extracting text from an image
class OCRService {
    // Method to extract text from a PDF file using pdf-parse library also i'll check if the file can be extracted and if not I'll throw an error with a descriptive message.
    async extractFromPDF(buffer) {
        try {
            const data = await pdfParse(buffer);
            return {
                text: data.text,
                pages: data.numpages,
                success: true,
            };
        } catch (error) {
            console.log('PDF extraction error:', error, 404);
            throw new ErrorResponse('Failed to extract text from PDF. File may be corrupted, password-protected or unsupported.', 400);
        }
            }
    async extractFromImage(buffer) {
        try {
            const result = await Tesseract.recognize(buffer, 'eng');
            return {
                text: result.data.text,
                confidence: result.data.confidence,
                success: true,
            };
        } catch (error) {
            console.log('OCR extraction error:', error);
            throw new ErrorResponse('Failed to extract text from image. File may be corrupted or unsupported.', 400);
        }
    }

    async extractText(file) {
        try {
            const {mimetype, buffer} = file;
            if (!buffer || buffer.length === 0) {
                throw new ErrorResponse('File is empty or cannot be read.', 400);
            }
            if (mimetype === 'application/pdf') {
                return await this.extractFromPDF(buffer);
            }
            else if (mimetype.startsWith('image/')) {
                return await this.extractFromImage(buffer);
            }
            else {
                throw new ErrorResponse('Unsupported file type. Only PDF and image files are supported.', 400);

        }

    }
    catch (error) {
        if (error instanceof ErrorResponse) {
            throw new ErrorResponse("Failed to process file.", 500); // Re-throw custom errors to be handled by the caller
        }
}

        }
    }
// This code defines an OCRService class with methods to extract text from PDF and image files using the tesseract.js library for OCR processing and pdf-parse for PDF extraction.
//  The extractText method determines the file type and calls the appropriate extraction method, while handling errors gracefully by throwing custom ErrorResponse instances with descriptive messages.
module.exports =  new OCRService();
