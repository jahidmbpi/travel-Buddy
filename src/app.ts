import Express, { Request, Response } from "express";
import router from "./app/route";

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Tour Guide",
  });
});

export default app;
