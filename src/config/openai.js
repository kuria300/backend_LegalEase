//ensure you have the OpenAI package installed and your API key set in the environment variables before using this code.

const OpenAI = require('openai');

// Initialize the OpenAI client with the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to test the connection to the OpenAI API by listing the available models
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

//i want to know if the connection to the OpenAI API is successful when I start my application, so I'll call the testConnection function here to check the connection.
//  If the connection is successful, it will log a success message; otherwise, it will log an error message with the details of the failure.
//testConnection();


/*
    * This code initializes the OpenAI client with the API key from environment variables.
    *  It also includes a function to test the connection to the OpenAI API.
    * The testConnection function attempts to list the available models from the OpenAI API and logs whether the connection was successful or if it failed, along with the error message.
 */
