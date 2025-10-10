import jwt from "jsonwebtoken";
import HashPassword from "../lib/hashPassword.js";
import User from "../models/auth.models.js";
import {
  COOKIES_NAME,
  JWT_EXPIRES_IN,
  JWT_SECRET,
} from "../config/env.config.js";
import bcrypt from "bcryptjs";

export async function SignUp(req, res, next) {
  try {
    const { name, email, username, password } = req.body;
    const existingUser = await User.findOne({
      or(array) {
        [username, email];
      },
    });

    if (existingUser?.email === email) {
      return res
        .status(400)
        .json({ success: false, error: "User already exists" });
    }

    if (existingUser?.username === username) {
      return res
        .status(400)
        .json({ success: false, error: "Username has been used" });
    }

    const user = await User.create({
      name,
      email,
      username,
      password: await HashPassword(password),
    });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.cookie(COOKIES_NAME, token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      data: {
        user: { id: user._id, name: user.name, username: user.username, profileCompleted: user.profileCompleted },
      },
    });
  } catch (err) {
    next(err);
  }
}

export async function SignIn(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: "User does not exists" });
    }

    const validatingPassword = await bcrypt.compare(password, user.password);

    if (!validatingPassword) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid Password" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.cookie(COOKIES_NAME, token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      data: {
        user: { id: user._id, name: user.name, username: user.username, profileCompleted: user.profileCompleted },
      },
    });
  } catch (err) {
    next(err);
  }
}

export async function isUserLoggedIn(req, res, next) {
  try {
    const { id } = req.user;
    if (!id) {
      return res
        .status(401)
        .json({ success: false, error: "User not logged in" });
    }
    const user = await User.findById(id).select("_id username name email profilePic backgroundPic profileCompleted");

    if (!user) {
      return res
        .status(401)
        .json({ success: false, error: "User Unauthorized" });
    }

    return res.status(200).json({ success: true, data: { user } });
  } catch (err) {
    next(err);
  }
}

export async function uploadProfile(req, res, next) {
  try {
    const { id } = req.user;
    if (!req.file) {
      return res.status(400).json({ success: false, error: "No file uploaded" });
    }

    const user = await User.findByIdAndUpdate(
      id,
      { profilePic: req.file.path },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Profile picture uploaded successfully",
      data: { profilePic: user.profilePic },
    });
  } catch (err) {
    next(err);
  }
}

export async function uploadBackground(req, res, next) {
  try {
    const { id } = req.user;
    if (!req.file) {
      return res.status(400).json({ success: false, error: "No file uploaded" });
    }

    const user = await User.findByIdAndUpdate(
      id,
      { backgroundPic: req.file.path },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Background picture uploaded successfully",
      data: { backgroundPic: user.backgroundPic },
    });
  } catch (err) {
      console.log(err);
    next(err);
  }
}
