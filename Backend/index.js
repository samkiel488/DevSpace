import express from "express";
import cors from "cors";
import { PORT } from "./config/env.config.js";
import { corsOptions } from "./config/cors.config.js";
import authRouter from "./router/auth.router.js";

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello From backend" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
