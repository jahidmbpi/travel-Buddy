import { BookingStatus } from "@prisma/client";
import { prisma } from "../../config/prisma";

const myBooking = async (id: string) => {
  const result = await prisma.booking.findMany({
    where: {
      touristId: id,
      status: BookingStatus.CONFRIMED || BookingStatus.CENCELLED,
    },
  });
  return result;
};

export const turistServices = {
  myBooking,
};
