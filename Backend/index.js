import express from "express";
import cors from "cors";
const app = express();
const PORT = 8080;
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port localhost:${PORT}`);
});
