import { config } from "dotenv";

config({ path: ".env" });

export const {
  PORT,
  FRONTEND_API_URL,
  DATABASE_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  COOKIES_NAME,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;
