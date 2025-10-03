import jwt from "jsonwebtoken";
import {COOKIES_NAME, JWT_SECRET} from "../config/env.config.js";
import User from "../models/auth.models.js";

export async function ProtectMiddleware(req, res, next) {
  const token = req.cookies[COOKIES_NAME];
  try {
    if (!token) {
      return res
        .status(401)
        .json({ success: false, error: "No token provided" });
    }

    const verifyToken = jwt.verify(token, JWT_SECRET);
    if (!verifyToken) {
      return res
        .status(401)
        .json({ success: false, error: "No token provided" });
    }

    const user = await User.findById(verifyToken.id).select(
      "name username _id"
    );
    if (!user) {
      return res.status(401).json({ success: false, error: "Invalid token" });
    }
    req.user = { id: user._id, name: user.name, username: user.username };
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false, error: "User Unauthorized" });
  }
}
