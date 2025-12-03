import { Request } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../config/prisma";
const createUser = async (req: Request) => {
  const data = req.body;

  const plainPassword = data.password;
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  console.log(hashedPassword);
  const userData = {
    ...data,
    password: hashedPassword,
  };

  const result = await prisma.user.create({
    data: userData,
  });

  const { password, ...withOutPassword } = result;
  return withOutPassword;
};

export const userServices = {
  createUser,
};
