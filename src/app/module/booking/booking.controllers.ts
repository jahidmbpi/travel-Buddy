import { Request, Response } from "express";
import catchAsync from "../../sheard/catchAsync";
import sendResponse from "../../sheard/sendResponse";
import { StatusCodes } from "http-status-codes";
import { bookingServices } from "./booking.services";

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const user = req.user;
  const listingId = req.params.id;
  const result = await bookingServices.createBooking(payload, user, listingId);
  sendResponse(res, {
    success: true,
    message: "booking create succsess",
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

export const bookingController = {
  createBooking,
};
