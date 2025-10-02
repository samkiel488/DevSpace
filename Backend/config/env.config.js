import { config } from "dotenv";

config({ path: ".env" });

export const { PORT, FRONTEND_API_URL } = process.env;
