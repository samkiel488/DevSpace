import { Router } from "express";
import { ProtectMiddleware } from "../middleware/protect.middleware.js";
import {
    editUserProfile,
    getMyProfile, getProfileByUserId,
    postNewProfile,
} from "../controller/profile.controller.js";

const profileRouter = Router();

profileRouter.get("/me", ProtectMiddleware, getMyProfile);
profileRouter.post("/", ProtectMiddleware, postNewProfile);
profileRouter.patch("/", ProtectMiddleware, editUserProfile);
profileRouter.get("/:id", getProfileByUserId);

export default profileRouter;
