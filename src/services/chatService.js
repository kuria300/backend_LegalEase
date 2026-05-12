//i'll configure this with openai  also use the legal prompts to ensure that chat will be based with the info i have given

const { openai } = require('../config/openai.js');
const { LEGAL_SYSTEM_PROMPT } = require('../utils/legalPrompts.js');
const ErrorResponse = require('../utils/ErrorObj.js');

//Ill define a ChatService class that will handle the chat interactions with the OpenAI API.
//  This service will use the legal prompts to ensure that the responses are relevant to Kenyan law and legal information.
//  The service will also include error handling to manage any issues that arise during the API calls or response processing.
class ChatService {
    async sendMessage(userMessage, conversationHistory = []) {
        try {
            // I'll first check if the user message is valid (not empty or just whitespace). If the message is invalid, I'll throw an error with a descriptive message to inform the caller about the issue.
            if (!userMessage || userMessage.trim().length === 0) {
                throw new ErrorResponse('User message cannot be empty', 400);
        }
        // I'll construct the messages array for the OpenAI API call, starting with the system prompt to set the context, followed by the conversation history and the user's current message. This structure helps maintain the flow of the conversation and ensures that the AI's responses are informed by previous interactions.
        const messages = [
            { role: 'system', content: LEGAL_SYSTEM_PROMPT },
            ...conversationHistory,
            { role: 'user', content: userMessage }
        ];
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: messages,
            max_tokens: 2500, // I'll set a reasonable token limit for the response to ensure that it is concise and relevant.
        });
// After receiving the response from the OpenAI API, I'll extract the relevant information such as the reply content, the model used, and the usage statistics. This information will be structured in a way that can be easily consumed by the caller, providing both the AI's response and insights into the API usage.
        return {
            reply: completion.choices[0].message.content,
            model: completion.model,
            usage: completion.usage,

        };
        // I'll also include error handling to catch any issues that may arise during the API call or response processing. If an error occurs, I'll throw a new ErrorResponse with a descriptive message and a 500 status code to indicate that there was a server-side issue while processing the chat message.
    } catch (error) {
        console.error('OpenAI API Error:', error);
        if (error instanceof ErrorResponse) {
            throw error; // Re-throw custom errors to be handled by the caller
        }
        if (error.code === "insufficient_quota") {
            throw new ErrorResponse('Error occurred while sending message. Please contact support if the issue persists.', 500); // Custom message for insufficient quota
        } else if (error.code === "invalid_api_key") {
            throw new ErrorResponse('Invalid API key. Please check your configuration.', 500); // Custom message for invalid API key
        } else if (error.status === 429) {
            throw new ErrorResponse('Error occurred while sending message. Please try again later.', 429); // Generic error message
        }
        throw new ErrorResponse('An unexpected error occurred while sending message. Please try again later.', 500); // Generic error message for other cases

    }
}
}

module.exports = new ChatService();
