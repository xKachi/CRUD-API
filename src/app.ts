import Express, { NextFunction, Request, Response } from "express";
import indexRoute from "./routes";
import { config } from "dotenv";
config();

const app = Express();

app.use(Express.json());

app.use(indexRoute);

/* Error Handler */
app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(501).json({
    status: false,
    message: "An error occurred",
    error,
  })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
