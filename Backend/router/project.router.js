import {Router} from "express";
import {ProtectMiddleware} from "../middleware/protect.middleware.js";
import {getAllProjects, postNewProject} from "../controller/project.controller.js";

const projectRouter = Router();

projectRouter.get("/",ProtectMiddleware,getAllProjects);
projectRouter.post("/", ProtectMiddleware,postNewProject);

export default projectRouter;