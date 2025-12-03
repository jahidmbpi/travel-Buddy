import { userController } from "./user.controllers";
import { Router } from "express";

const router = Router();

router.post("/create", userController.createUser);

export const userRouter = router;
