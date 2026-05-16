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
      await minioClient.makeBucket(bucketName, "us-east-1");// changed bucket to bucketName
    }
  } catch (error) {
      if (error.code === 'BucketAlreadyOwnedByYou' || error.code === 'BucketAlreadyExists') {
      return;
    }

    throw new ErrorResponse("Error initializing MinIO bucket: " + error.message, 500);
  }
};
 
ensureBucketExists();
module.exports = minioClient;

//I have added the if function to check if the bucket already exists and if it does, it will simply return without throwing an error.
//  This way, we can avoid the "BucketAlreadyOwnedByYou" error when the bucket already exists.