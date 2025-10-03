import {Router} from "express";
import {ProtectMiddleware} from "../middleware/protect.middleware.js";

const projectRouter = Router();

projectRouter.get("/",ProtectMiddleware,(req, res)=>{
    res.json({success: true, message: "Welcome to the project"});
})

export default projectRouter;