//import open ai
const { openai } = require('../config/openai.js');
//import document model and legal document model
const { LEGAL_SYSTEM_PROMPT, DOCUMENT_ANALYSIS_PROMPT } = require('../utils/legalPrompts.js');
const ErrorResponse = require('../utils/ErrorObj.js');
const {ocrService} = require('./ocrService.js');

//function to analyze document
class DocumentService {
    async analyzeDocument(file) {
        try {
            // Check if file is uploaded
            if (!file) {
                throw new ErrorResponse('No file uploaded', 400);
            }

            // Extract text from the document using ocrService
            const extraction = await ocrService.extractText(file);
            const extractedText = extraction.text;

            // Check if extracted text is long enough for analysis
            if (!extractedText || extractedText.trim().length < 50) {
                throw new ErrorResponse('Extracted text is too short for analysis', 400);
            }

            // Send the extracted text to OpenAI for analysis
            const completion = await openai.chat.completions.create({
                model: 'gpt-4o',
                messages: [
                    { role: 'system', content: LEGAL_SYSTEM_PROMPT },
                    { role: 'user', content: `${DOCUMENT_ANALYSIS_PROMPT}\n\n ${extractedText}` },
                ],
                max_tokens: 2500 //change if you desire
            });

            // Return the analysis result
            return {
                fileName: file.originalname,
                fileType: file.mimetype,
                extractedText,
                textPreview: extractedText.substring(0, 500) + "....",
                analysis: completion.choices[0].message.content,
                pages: extraction.pages || null,
                success: true
            };
        } catch (error) {
            console.error("DOCUMENT ANALYSIS ERROR:", error);
            if (error instanceof ErrorResponse) throw error;
            throw new ErrorResponse("FAILED TO ANALYZE DOCUMENT", 500);
        }
    }
}

module.exports = new DocumentService();
