import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const validateRequest =
  (zodSchema: ZodTypeAny) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let body = req.body?.data || req.body;
      if (typeof body === "string") {
        body = JSON.stringify(body);
      }
      body = await zodSchema.parseAsync(body);
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;
