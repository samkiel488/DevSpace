import Feed from "../models/feed.model.js";
import User from "../models/auth.models.js";

export async function getFeeds(req, res, next) {
  try {
    const feeds = await Feed.find()
      .populate("author", "name username profilePic")
      .populate({
        path: "comments.user",
        select: "name username profilePic",
      })
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      data: feeds,
    });
  } catch (err) {
    next(err);
  }
}

export async function createFeed(req, res, next) {
  try {
    const { content } = req.body;
    const author = req.user.id;

    if (!content || content.trim().length === 0) {
      return res
        .status(400)
        .json({ success: false, error: "Content is required" });
    }

    const feed = await Feed.create({
      content: content.trim(),
      author,
    });

    const populatedFeed = await Feed.findById(feed._id)
      .populate("author", "name username profilePic")
      .lean();

    return res.status(201).json({
      success: true,
      data: populatedFeed,
    });
  } catch (err) {
    next(err);
  }
}

export async function likeFeed(req, res, next) {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const feed = await Feed.findById(id);
    if (!feed) {
      return res.status(404).json({ success: false, error: "Feed not found" });
    }

    const userLikedIndex = feed.likes.indexOf(userId);
    if (userLikedIndex > -1) {
      // Unlike
      feed.likes.splice(userLikedIndex, 1);
    } else {
      // Like
      feed.likes.push(userId);
    }

    await feed.save();

    const populatedFeed = await Feed.findById(id)
      .populate("author", "name username profilePic")
      .lean();

    return res.status(200).json({
      success: true,
      data: populatedFeed,
    });
  } catch (err) {
    next(err);
  }
}

export async function addComment(req, res, next) {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const userId = req.user.id;

    if (!text || text.trim().length === 0) {
      return res
        .status(400)
        .json({ success: false, error: "Comment text is required" });
    }

    const feed = await Feed.findById(id);
    if (!feed) {
      return res.status(404).json({ success: false, error: "Feed not found" });
    }

    feed.comments.push({
      user: userId,
      text: text.trim(),
      date: new Date(),
    });

    await feed.save();

    const populatedFeed = await Feed.findById(id)
      .populate("author", "name username profilePic")
      .populate({
        path: "comments.user",
        select: "name username profilePic",
      })
      .lean();

    return res.status(200).json({
      success: true,
      data: populatedFeed,
    });
  } catch (err) {
    next(err);
  }
}

export async function getFeedsById(req, res, next) {
  try {
    const { id } = req.params;

    const feed = await Feed.findById(id)
      .populate({
        path: "comments.user",
        select: "name username profilePic",
      })
      .populate("author", "name username profilePic");

    if(!feed){
        return res.status(404).json({ success: false, error: "Feed not found" });
    }
    return  res.status(200).json({success: true, data:{feed}})
  } catch (err) {
    next(err);
  }
}
