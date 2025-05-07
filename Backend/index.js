import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
};

app.use(cors(corsOptions));

const userName = ["ayomide", "sam", "vincent", "james", "micheal", "joshua"];
const post = [
  {
    name: "Dries Vincent",
    date: "December 9 at 11:43 AM",
    postHeadline: "You should use alpinejs framework",
    postText:
      "Arradawark touches Spark was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be…",
  },
];

app.get("/users/:username", (req, res) => {
  const username = req.params.username;

  const userExists = userName.find((user) => user === username);

  if (userExists) {
    res.json({ post: post });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port localhost:${PORT}`);
});
