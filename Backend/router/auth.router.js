import { Router } from "express";
import {SignIn, SignUp} from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/signup", SignUp);
authRouter.post("/signin", SignIn);

export default authRouter;
