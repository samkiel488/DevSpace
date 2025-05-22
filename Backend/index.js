import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();
const PORT = 8080;
const corsOptions = {
  origin: process.env.FRONTEND_API_URL,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};

app.use(cors(corsOptions));
app.use(express.json());
const post = [
  {
    name: "Dries Vincent",
    date: "December 9 at 11:43 AM",
    postHeadline: "You should use alpinejs framework",
    postText:
      "Arradawark touches Spark was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be…",
  },
  {
    name: "Dries Vincent",
    date: "December 9 at 11:43 AM",
    postHeadline: "You should use alpinejs framework",
    postText:
      "Arradawark touches Spark was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be…",
  },
  {
    name: "Dries Vincent",
    date: "December 9 at 11:43 AM",
    postHeadline: "You should use alpinejs framework",
    postText:
      "Arradawark touches Spark was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be…",
  },
];

const user = [
  {
    fName: "Ayomide",
    lName: "James",
    gmailAddress: "ayomide@gmail.com",
    userName: "ayomide",
    password: "admin",
  },
  {
    fName: "David",
    lName: "Olawale",
    gmailAddress: "d@gmail.com",
    userName: "davido",
    password: "admin123",
  },
  {
    fName: "Chioma",
    lName: "Nwosu",
    gmailAddress: "c@gmail.com",
    userName: "chiom",
    password: "admin456",
  },
  {
    fName: "Tunde",
    lName: "Bamidele",
    gmailAddress: "t@gmail.com",
    userName: "bami",
    password: "admin789",
  },
];

app.get("/auth/:inputedEmailAddress", (req, res) => {
  const inputedEmailAddress = req.params.inputedEmailAddress;

  const foundUser = user.find(
    (email) =>
      email.gmailAddress.toLocaleLowerCase() ===
      inputedEmailAddress.toLocaleLowerCase()
  );

  if (foundUser) {
    res.json({
      foundUser: {
        fName: foundUser.fName,
        lName: foundUser.lName,
        userName: foundUser.userName,
      },
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.get("/users/:username", (req, res) => {
  const username = req.params.username;

  const userExists = user.find((user) => user.userName === username);

  if (userExists) {
    res.json({ post: post });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.post("/verify", (req, res) => {
  const { emailAddress, password } = req.body;

  const users = user.find(
    (user) => user.gmailAddress === emailAddress && user.password === password
  );

  if (users) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post("/register", (req, res) => {
  const { password, userName, gmailAddress, fName, lName, phoneNumber } =
    req.body;

  const newUser = {
    fName: fName,
    lName: lName,
    gmailAddress: gmailAddress,
    userName: userName,
    password: password,
  };

  res.json({ success: true });
});

app.post("/verify/username", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port localhost:${PORT}`);
});
