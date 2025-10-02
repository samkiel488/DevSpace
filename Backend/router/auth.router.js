import { Router } from "express";
import { SignUp } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/signup", SignUp);

export default authRouter;
