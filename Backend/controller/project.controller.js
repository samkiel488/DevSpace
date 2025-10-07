import Project from "../models/project.models.js";

export async function getAllProjects(req, res, next) {
  try {
    const project = await Project.find().populate("user", "_id name username");
    return res.status(200).json({ success: true, data: { project } });
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

export async function getProjectById(req, res, next) {
  try {
    const { id } = req.params;

    const project = await Project.findById(id).populate(
      "user",
      "_id name username"
    );

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: "Project Not Found" });
    }

    return res.status(200).json({ success: true, data: { project } });
  } catch (err) {
    next(err);
  }
}

export async function deleteProjectById(req, res, next) {
  try {
    const { id } = req.params;
    console.log(id);

    const project = await Project.deleteOne({ _id: id });

    if (!project.acknowledged) {
      return res
        .status(400)
        .json({ success: false, error: "Unable to delete Project" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Project deleted Successfully" });
  } catch (err) {
    next(err);
  }
}

export async function editProjectById(req, res, next) {
  try {
    const { id } = req.params;
    const { title, description, category, imageUrl, codeUrl, previewUrl } =
      req.body;

    const project = await Project.findById(id);
    if (!project) {
      return res
        .status(400)
        .json({ success: false, error: "Project doesn't exist" });
    }

    if (
      title === project.title &&
      description === project.description &&
      category === project.category &&
      codeUrl === project.codeUrl &&
      previewUrl === project.previewUrl &&
      imageUrl === project.imageUrl
    ) {
      return res
        .status(400)
        .json({ success: false, error: "No changes was made" });
    }

      let editing = true;

      if (title !== project.title){
        project.title = title;
        editing = false;
    }

      if(description !== project.description){
          project.description = description;
          editing = false;
      }

      if(category !== project.category){
          project.category = category;
          editing = false;
      }

      if(codeUrl !== project.codeUrl){
          project.codeUrl = codeUrl;
          editing = false;
      }

      if(previewUrl !== previewUrl){
          project.previewUrl = previewUrl;
          editing = false;
      }

      if(imageUrl !== imageUrl){
          project.imageUrl = imageUrl;
          editing = false;
      }

      if(editing){
          return res.status(200).json({ success: false, error: "No input was changed" });
      }

      await project.save();

      return res.status(200).json({ success: true, data: { project } });
  } catch (err) {
    next(err);
  }
}
