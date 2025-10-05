import Project from "../models/project.models.js";

export async function getAllProjects(req, res, next) {
  try {
    const project = await Project.find().populate("user","_id name username");
    return res.status(200).json({success: true, data:{project}});
  } catch (err) {
    next(err);
  }
}

export async function postNewProject(req, res, next) {
  try {
    const { id } = req.user;
    if (!req.body) {
      return res.status(400).json({ success: false, error: "No input" });
    }
    const { title, description, category, imageUrl, codeUrl, previewUrl } =
      req.body;
    if (title === undefined || title === null || title.length === 0) {
      return res
        .status(400)
        .json({ success: false, error: `Please enter a title` });
    }

    if (
      description === undefined ||
      description === null ||
      description.length === 0
    ) {
      return res
        .status(400)
        .json({ success: false, error: `Please enter a description` });
    }

    if (category === undefined || category === null || category.length === 0) {
      return res
        .status(400)
        .json({ success: false, error: `Please enter a category` });
    }

    if (imageUrl === undefined || imageUrl === null || imageUrl.length === 0) {
      return res
        .status(400)
        .json({ success: false, error: `Please enter a image url` });
    }

    if (codeUrl === undefined || codeUrl === null || codeUrl.length === 0) {
      return res
        .status(400)
        .json({ success: false, error: `Please enter the code url` });
    }

    const project = await Project.create({
      title,
      description,
      category,
      imageUrl,
      codeUrl,
      previewUrl,
      user: id,
    });

    console.log(project);

    return res.status(201).json({ success: true, data: { project } });
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ success: false, error: "Duplicate titles" });
    }
    next(err);
  }
}
