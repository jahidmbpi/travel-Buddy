export interface ICreateBooking {
  startDate: Date | string;
  endDate: Date | string;
  listingId: string;
  guideId: string;
  groupSize: number;
  status?: "PENDING" | "CONFIRMED" | "CANCELLED";
  paymentStatus?: "UNPAID" | "PAID" | "REFUNDED";
}
