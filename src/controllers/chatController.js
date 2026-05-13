//I'll pull the services from chat Service 
//Aquire document from the document service 
// I'll use prisma client 
//Use of error response and success response

//There must be a class for the chat controller 
//within the class i'll use async function 
//system must check whether if there is text so hat means i'll use if function for that

//ill make sure that the system sends few message ooutputs then it'll force users to login or register
//another async function will deal with uploading of documents 
//check whether the document is uploaded that I'll use if functions
//Within this there will be another async function to check chatHistory and the system will check whether the user is logged in or not
//if the user is not logged in then the system will send a message to login or register 
//if the user is logged in then the system will check for the chat history and respond accordingly
//getting hostory of document uploaded by the user and respond accordingly

const chatService = require('../services/chatService');
const documentService = require('../services/documentService');
const chatRepository = require('../repositories/chat.repository');

//class for chat controller
class ChatController {
    //async function to handle chat messages
    async handleChatMessage(req, res, next) {
        try {
            // Extract message, conversation history and userId from the request body
            const { message, conversationHistory = [], userId } = req.body;

            // Check if message is empty and return 400 if so
            if (!message || message.trim() === '') {
                return res.status(400).json({ error: 'Message cannot be empty' });
            }

            // Send the message to the AI via chatService and get the result
            const result = await chatService.sendMessage(message, conversationHistory);

            // Append the user message and assistant reply to the conversation history
            const updatedHistory = [
                ...conversationHistory,
                { role: 'user', content: message },
                { role: 'assistant', content: result.reply }
            ];

            // If user is logged in, save the message and reply to the database via repository
            if (userId) {
                await chatRepository.saveMessage(userId, message, result.reply);
            }

            // Build the response object with the reply, updated history and usage stats
            const response = {
                success: true,
                reply: result.reply,
                conversationHistory: updatedHistory,
                usage: result.usage
            };

            // If user is a guest, include remaining messages count and prompt to login if limit reached
            if (!userId && req.remainingMessages !== undefined) {
                response.remainingMessages = req.remainingMessages;
                if (req.remainingMessages === 0) {
                    response.authMessage = 'Please login or register to continue chatting.';
                }
            }

            // Send the response back to the client
            res.json(response);
        } catch (error) {
            // Pass any errors to the error handler middleware
            next(error);
        }
    }

    // async function to handle document uploads and analysis
    async uploadDocument(req, res, next) {
        try {
            // Get the uploaded file from the request
            const file = req.file;
            const { userId } = req.body;

            // Check if a file was uploaded
            if (!file) throw new ErrorResponse('No file uploaded', 400);

            // Send the file to documentService for analysis
            const result = await documentService.analyzeDocument(file);

            // If user is logged in, save the document to the database via repository
            if (userId) {
                await chatRepository.saveDocument(userId, result.fileName);
            }

            // Send the analysis result back to the client
            res.json({ success: true, ...result });
        } catch (err) {
            next(err);
        }
    }

    // async function to get chat history for a logged in user
    async getChatHistory(req, res, next) {
        try {
            // Get userId from route params and limit from query string
            const { userId } = req.params;
            const { limit = 50 } = req.query;

            // Check if userId is provided
            if (!userId) throw new ErrorResponse('User ID is required', 400);

            // Fetch the most recent conversations from the database via repository
            const conversations = await chatRepository.getChatHistory(userId, limit);

            // Send the conversations back to the client
            res.json({ success: true, conversations, count: conversations.length });
        } catch (err) {
            next(err);
        }
    }

    // async function to get document upload history for a logged in user
    async getDocumentHistory(req, res, next) {
        try {
            // Get userId from route params and limit from query string
            const { userId } = req.params;
            const { limit = 20 } = req.query;

            // Check if userId is provided
            if (!userId) throw new ErrorResponse('User ID is required', 400);

            // Fetch the most recent document uploads from the database via repository
            const documents = await chatRepository.getDocumentHistory(userId, limit);

            // Send the document history back to the client
            res.json({ success: true, documents, count: documents.length });
        } catch (err) {
            next(err);
        }
    }

    // async function to clear chat history for a logged in user
    async clearHistory(req, res, next) {
        try {
            // Get userId from the request body
            const { userId } = req.body;

            // Check if userId is provided
            if (!userId) throw new ErrorResponse('User ID is required', 400);

            // Delete all conversations for the user from the database via repository
            await chatRepository.clearHistory(userId);

            // Send a success response back to the client
            res.json({ success: true, message: 'Conversation cleared', conversationHistory: [] });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new ChatController();
