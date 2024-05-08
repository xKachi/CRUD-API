import Express from "express";
import indexRoute from "./routes";

const app = Express();

app.use(Express.json());

app.use(indexRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});