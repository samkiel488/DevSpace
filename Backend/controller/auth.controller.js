import jwt from "jsonwebtoken";
import HashPassword from "../lib/hashPassword.js";
import User from "../models/auth.models.js";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.config.js";

export async function SignUp(req, res, next) {
  try {
    const { name, email, username, password } = req.body;
    const existingUser = await User.findOne({ email });
    console.log(existingUser);

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      username,
      password: await HashPassword(password),
    });

    console.log(user);

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return res.status(201).json({ success: true, data: { user, token } });
  } catch (err) {
    next(err);
  }
}
