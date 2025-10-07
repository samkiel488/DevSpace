import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
        unique: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
      minLength: 5,
      maxLength: 100,
    },
    bio: {
      type: String,
      required: true,
      trim: true,
      minLength: 5,
      maxLength: 500,
    },
    skills: {
      type: [String],
      required: true,
    },
    tools: {
      type: [String],
      required: true,
    },
    github: {
      type: String,
      trim: true,
      minLength: 10,
    },
    instagram: {
      type: String,
      trim: true,
      minLength: 10,
    },
    twitter: {
      type: String,
      trim: true,
      minLength: 10,
    },
    linkedin: {
      type: String,
      trim: true,
      minLength: 10,
    },
    portfolio: {
      type: String,
      trim: true,
      minLength: 10,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
