import { Router } from "express";
import { ProtectMiddleware } from "../middleware/protect.middleware.js";
import { postNewProfile } from "../controller/profile.controller.js";

const profileRouter = Router();

profileRouter.post("/", ProtectMiddleware, postNewProfile);

export default profileRouter;
