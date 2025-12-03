import { Router } from "express";
import { authController } from "./auth.controllers";

const router = Router();
router.post("/login", authController.logInWithEmailAndPassword);

export const authRouter = router;
