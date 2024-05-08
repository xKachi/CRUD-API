import { Router } from "express";
import userRoute from "./user.route";

// Index
const indexRoute = Router();

indexRoute.get("", async (req, res) => {
  res.json({ message: "Moneysssssss" });
});

indexRoute.use("/users", userRoute);

export default indexRoute;
