import {Router} from "express";
import {ProtectMiddleware} from "../middleware/protect.middleware.js";
import {getAllProjects} from "../controller/project.controller.js";

const projectRouter = Router();

projectRouter.get("/",ProtectMiddleware,getAllProjects);

export default projectRouter;