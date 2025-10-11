import { Router } from "express";
import { getFeeds, createFeed, likeFeed, addComment } from "../controller/feed.controller.js";
import { ProtectMiddleware } from "../middleware/protect.middleware.js";

const router = Router();

router.get("/", getFeeds);
router.post("/", ProtectMiddleware, createFeed);
router.put("/:id/like", ProtectMiddleware, likeFeed);
router.post("/:id/comment", ProtectMiddleware, addComment);

export default router;
