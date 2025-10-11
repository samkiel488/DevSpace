import Profile from "../models/profile.models.js";
import AreArrayEqual from "../lib/areArrayEqual.js";

export async function getMyProfile(req, res, next) {
  try {
    const { id } = req.user;

    const profile = await Profile.findOne({ user: id });
    if (!profile) {
      return res
        .status(400)
        .json({ success: false, message: "Profile not found" });
    }

    return res.status(200).json({ success: true, data: { profile } });
  } catch (err) {
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
        .json({ success: false, error: "No Skill was Found" });
    }
    if (tools.length === 0) {
      return res
        .status(400)
        .json({ success: false, error: "No Tool was Found" });
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
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ success: false, error: "User can not have multiple Profile" });
    }
    console.log(err);
    next(err);
  }
}

export async function editUserProfile(req, res, next) {
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
    const profile = await Profile.findOne({ user: id });
    let editting = true;

    if (role !== profile.role) {
      profile.role = role;
      editting = false;
    }

    if (bio !== profile.bio) {
      profile.bio = bio;
      editting = false;
    }

    if (github !== profile.github) {
      profile.github = github;
      editting = false;
    }

    if (instagram !== profile.instagram) {
      profile.instagram = instagram;
      editting = false;
    }

    if (twitter !== profile.twitter) {
      profile.twitter = twitter;
      editting = false;
    }

    if (linkedin !== profile.linkedin) {
      profile.linkedin = linkedin;
      editting = false;
    }

    if (portfolio !== profile.portfolio) {
      profile.portfolio = portfolio;
      editting = false;
    }

    const skillEqual = AreArrayEqual(profile.skills, skills);
    if (!skillEqual) {
      profile.skills = skills;
      editting = false;
    }
    const toolsEqual = AreArrayEqual(profile.tools, tools);
    if (!toolsEqual) {
      profile.tools = tools;
      editting = false;
    }

    if (editting) {
      return res
        .status(400)
        .json({ success: false, error: "No changes was made" });
    }

    await profile.save();

    return res.json({ success: true, message: "Updated Successfully" });
  } catch (err) {
    next(err);
  }
}

export async function getProfileByUserId(req, res, next) {
  try {
    const { id } = req.params;

    const profile = await Profile.findOne({user: id}).populate(
      "user",
      "name username _id profilePic backgroundPic"
    );

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, error: "Profile not found" });
    }

    return res.status(200).json({ success: true, data: { profile } });
  } catch (err) {
    next(err);
  }
}

export async function getAllProfile(req, res, next) {
  try {
    const profile = await Profile.find()
      .select("_id role bio ")
      .populate("user", "profilePic name username _id");
    return res.status(200).json({ success: true, data: { profile } });
  } catch (err) {
    next(err);
  }
}
