import { Router } from "express";

const authRouter = Router();

authRouter.get("/", (req, res) => {
  res.json({ message: "GET all auth" });
});

export default authRouter;
