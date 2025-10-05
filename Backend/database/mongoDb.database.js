import mongoose from "mongoose";
import { DATABASE_URI } from "../config/env.config.js";

export async function connectToMongoDB() {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("Connected Successfully to Mongo DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
