import { FRONTEND_API_URL } from "./env.config.js";

export const corsOptions = {
  origin: FRONTEND_API_URL,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: "Content-Type, Authorization",
};
