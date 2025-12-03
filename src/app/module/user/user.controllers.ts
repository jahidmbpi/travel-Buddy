import { Request, Response } from "express";
import sendResponse from "../../sheard/sendResponse";
import { StatusCodes } from "http-status-codes";
import { userServices } from "./user.services";
import catchAsync from "../../sheard/catchAsync";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.createUser(req);
  sendResponse(res, {
    success: true,
    message: "user created successfuly",
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

export const userController = {
  createUser,
};
