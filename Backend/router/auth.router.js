import { Router } from "express";
import {isUserLoggedIn, SignIn, SignUp} from "../controller/auth.controller.js";
import {ProtectMiddleware} from "../middleware/protect.middleware.js";

const authRouter = Router();

authRouter.post("/signup", SignUp);
authRouter.post("/signin", SignIn);
authRouter.get("/loggedIn", ProtectMiddleware,isUserLoggedIn);

export default authRouter;
