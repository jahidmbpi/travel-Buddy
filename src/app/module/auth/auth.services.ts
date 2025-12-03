import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/prisma";
import AppError from "../../helper/appError";
import bcrypt from "bcryptjs";
const logInWithEmailAndPassword = async (payload: {
  email: string;
  password: string;
}) => {
  const isExsitUser = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });
  if (!isExsitUser) {
    throw new AppError(StatusCodes.NOT_FOUND, "user  not found");
  }
  if (!isExsitUser.password) {
    throw new AppError(404, "password missing");
  }
  const matchPassword = await bcrypt.compare(
    payload.password,
    isExsitUser?.password
  );
  if (matchPassword === false) {
    throw new AppError(404, "invalid password, plase provide valid password");
  }
};

export const authServices = {
  logInWithEmailAndPassword,
};
