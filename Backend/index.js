import express from "express";
import cors from "cors";
import { PORT } from "./config/env.config.js";
import { corsOptions } from "./config/cors.config.js";
import authRouter from "./router/auth.router.js";
import { connectToMongoDB } from "./database/mongoDb.database.js";
import { errorHandler } from "./middleware/errorHandler.middleware.js";
import cookieParser from "cookie-parser";
import projectRouter from "./router/project.router.js";
import profileRouter from "./router/profile.router.js";
import notificationRouter from "./router/notification.router.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/projects", projectRouter);
app.use("/profile", profileRouter);
app.use("/notifications", notificationRouter);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({ success: true, message: "Hello From backend" });
});

app.listen(PORT, async () => {
  await connectToMongoDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
