import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { routes as shortenRoutes } from "./router.js";

dotenv.config();
const PORT = process.env.PORT || 3033;
const app = express();

app.use(bodyParser.json());
app.use("/shorten", shortenRoutes);
app.get("/", (req, res) => {
  res.send("home page");
});

export function start() {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}
