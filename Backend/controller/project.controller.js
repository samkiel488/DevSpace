import checkInput from "../lib/checkInput.js";

export async function getAllProjects(req, res, next) {
  try {
    // console.log(req.user);
    return res.json({ success: true, message: "Welcome to the project" });
  } catch (err) {
    next(err);
  }
}

export async function postNewProject(req, res, next) {
  try {
    // console.log(req.body);
    if (!req.body) {
      return res.status(400).json({ success: false, error: "No input" });
    }
    const { title, description, category, imageUrl, codeUrl, previewUrl } =
      req.body;

    if (checkInput({ field: { name: "title", value: title }, res })) return;
    if (
      checkInput({
        field: { name: "description", value: description },
        res,
      })
    )
      return;
    if (checkInput({ field: { name: "category", value: category }, res }))
      return;
    if (checkInput({ field: { name: "imageUrl", value: imageUrl }, res }))
      return;
    if (checkInput({ field: { name: "codeUrl", value: codeUrl }, res })) return;

    
  } catch (err) {
    next(err);
  }
}
