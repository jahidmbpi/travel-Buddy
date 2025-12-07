import { Request, Response } from "express";
import catchAsync from "../../sheard/catchAsync";
import sendResponse from "../../sheard/sendResponse";
import { StatusCodes } from "http-status-codes";
import { turistServices } from "./turist.services";

const myBooking = catchAsync(async (req: Request, res: Response) => {
  const id = req.user.userId;
  const result = await turistServices.myBooking(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: " all accepted booking retrived success",
    data: result,
  });
});

export const turistController = {
  myBooking,
};
