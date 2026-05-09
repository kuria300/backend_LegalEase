const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const testConnection = async () => {
    try {
        await openai.models.list();
        console.log('Connection to OpenAI API successful!');
    }
    catch (error) {
        console.error('Failed to connect to OpenAI API:', error);
    }
    };

module.exports = {
    openai,
    testConnection,
};

