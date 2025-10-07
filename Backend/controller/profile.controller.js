import Profile from "../models/profile.models.js";

export async function postNewProfile(req, res, next) {
  try {
    // const { id } = req.user;
    const { role, bio, skills, tools, socialHandles } = req.body;

    if (!role) {
      return res
        .status(400)
        .json({ success: false, message: "role not found" });
    }

    if (!bio) {
      return res.status(400).json({ success: false, message: "Bio not found" });
    }

    if (skills.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No Skill was Found" });
    }
    if (tools.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No Tool was Found" });
    }

    const profile = await Profile.create({
      role,
      bio,
      skills,
      tools,
      socialHandles,
    });

    return res.status(200).json({ success: true, data: { profile } });
  } catch (err) {
    next(err);
  }
}
