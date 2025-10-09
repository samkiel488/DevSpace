import { Router } from "express";
import {
    isUserLoggedIn,
    SignIn,
    SignUp,
    uploadProfile,
    uploadBackground,
    logOut
} from "../controller/auth.controller.js";
import { ProtectMiddleware } from "../middleware/protect.middleware.js";
import { uploadProfile as uploadProfileMiddleware, uploadBackground as uploadBackgroundMiddleware } from "../middleware/upload.js";

const authRouter = Router();

authRouter.post("/signup", SignUp);
authRouter.post("/signin", SignIn);
authRouter.get("/loggedIn", ProtectMiddleware, isUserLoggedIn);
authRouter.get("/logout", ProtectMiddleware, logOut);
authRouter.post("/upload/profile", ProtectMiddleware, uploadProfileMiddleware, uploadProfile);
authRouter.post("/upload/background", ProtectMiddleware, uploadBackgroundMiddleware, uploadBackground);

export default authRouter;
