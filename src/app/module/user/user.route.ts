import { Role } from "@prisma/client";
import cheakAuth from "../../sheard/cheakAuth";
import { userController } from "./user.controllers";
import { Router } from "express";

const router = Router();

router.post("/create", userController.createUser);
router.get("/getalluser", cheakAuth(Role.TOURIST), userController.getAllUser);

export const userRouter = router;
