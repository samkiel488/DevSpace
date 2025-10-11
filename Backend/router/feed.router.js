import { Router } from "express";
import {getFeeds, createFeed, likeFeed, addComment, getFeedsById} from "../controller/feed.controller.js";
import { ProtectMiddleware } from "../middleware/protect.middleware.js";

const router = Router();

router.get("/", getFeeds);
router.post("/", ProtectMiddleware, createFeed);
router.get("/:id", ProtectMiddleware, getFeedsById)
router.put("/:id/like", ProtectMiddleware, likeFeed);
router.post("/:id/comment", ProtectMiddleware, addComment);

export default router;
