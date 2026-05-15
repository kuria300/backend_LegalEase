require("dotenv").config();
const ErrorResponse = require("../utils/ErrorObj");
const Minio = require("minio");

const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_END_POINT,
  port: parseInt(process.env.MINIO_PORT),
  useSSL: false,
  accessKey: process.env.MINIO_ROOT_USER,
  secretKey: process.env.MINIO_ROOT_PASSWORD,
});
const bucketName = process.env.MINIO_BUCKET_NAME;

// Ensure the bucket exists
const ensureBucketExists = async () => {
  try {
    const exists = await minioClient.bucketExists(bucketName);
    if (!exists) {
      await minioClient.makeBucket(bucket, "us-east-1");
    }
  } catch (error) {
    throw new ErrorResponse("Error initializing MinIO bucket: " + error.message, 500);
  }
};
 
ensureBucketExists();
module.exports = minioClient;