import mongoose from "mongoose";
import { DATABASE_URI } from "../config/env.config.js";

export async function connectToMongoDB() {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("Server is now Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
