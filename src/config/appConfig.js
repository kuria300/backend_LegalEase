// Load environment variables from .env file into process.env
require('dotenv').config()

// Export app-wide configuration values used across the application
module.exports={
    // Port the server will listen on, defaults to 3000 if not set in .env
    PORT: process.env.PORT || 3000,
    // Timezone set to Nairobi to ensure all dates and times are in East Africa Time
    TZ: "Africa/Nairobi",
    // Number of CPUs to leave unused for the cluster, defaults to 1 if not set in .env
    numLessCpus: process.env.NUMLESSCPUS || 1
}
