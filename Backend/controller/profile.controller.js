import Profile from "../models/profile.models.js";

export async function getMyProfile(req, res, next) {
    try {
        const {id} = req.user;

        const profile = await Profile.findOne({user: id});
        console.log(profile);
        if (!profile) {
            return res.status(400).json({success: false, message: "Profile not found"});
        }

        return res.status(200).json({success: true, data: {profile}});
    }catch (err){
        next(err);
    }
}

export async function postNewProfile(req, res, next) {
  try {
    const { id } = req.user;
    const {
      role,
      bio,
      skills,
      tools,
      github,
      instagram,
      twitter,
      linkedin,
      portfolio,
    } = req.body;

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
        user: id,
      role,
      bio,
      skills,
      tools,
      github,
      instagram,
      twitter,
      linkedin,
      portfolio,
    });

    return res.status(200).json({ success: true, data: { profile } });
  } catch (err) {
      if(err.code == 11000){
          return res.status(400).json({ success: false, error: "User can not have multiple Profile" });
      }
      console.log(err)
    next(err);
  }
}
