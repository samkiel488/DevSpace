export async function getAllProjects(req, res, next) {
  try {
    console.log(req.user);
    return res.json({ success: true, message: "Welcome to the project" });
  } catch (err) {
    next(err);
  }
}
