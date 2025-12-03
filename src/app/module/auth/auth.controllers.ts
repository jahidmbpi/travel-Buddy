import { Request, Response } from "express";
import catchAsync from "../../sheard/catchAsync";
import sendResponse from "../../sheard/sendResponse";
import { StatusCodes } from "http-status-codes";
import { authServices } from "./auth.services";

const logInWithEmailAndPassword = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await authServices.logInWithEmailAndPassword(payload);
    sendResponse(res, {
      success: true,
      message: "login",
      statusCode: StatusCodes.CREATED,
      data: "",
    });
  }
);

export const authController = {
  logInWithEmailAndPassword,
};
