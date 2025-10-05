import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Project should have at least 3 characters"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: [10, "Project should have at least 10 characters"],
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    codeUrl: {
      type: String,
      required: true,
    },
    previewUrl: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
        ref:"User",
    },
  },
  { timestamps: true }
);

projectSchema.index({title: 1, user: 1}, {unique: true})

const Project = mongoose.model("Project", projectSchema);
export default Project;
