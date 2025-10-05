import {Router} from "express";
import {ProtectMiddleware} from "../middleware/protect.middleware.js";
import {
    deleteProjectById,
    editProjectById,
    getAllProjects,
    getProjectById,
    postNewProject
} from "../controller/project.controller.js";

const projectRouter = Router();

projectRouter.get("/",getAllProjects);
projectRouter.post("/", ProtectMiddleware,postNewProject);
projectRouter.get("/:id", ProtectMiddleware,getProjectById);
projectRouter.patch("/:id", ProtectMiddleware,editProjectById);
projectRouter.delete("/:id", ProtectMiddleware, deleteProjectById);

export default projectRouter;