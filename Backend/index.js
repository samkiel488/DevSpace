import express from "express";
import cors from "cors";
import { PORT } from "./config/env.config.js";
import { corsOptions } from "./config/cors.config.js";
import authRouter from "./router/auth.router.js";
import { connectToMongoDB } from "./database/mongoDb.database.js";
import { errorHandler } from "./middleware/errorHandler.middleware.js";
connectToMongoDB();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.use("/auth", authRouter);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({ message: "Hello From backend" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
