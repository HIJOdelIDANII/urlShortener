import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { shortenRoutes } from "./router.js";
import { shortedRoutes } from "./router.js";

dotenv.config();
const PORT = process.env.PORT || 3033;
const app = express();

app.use(bodyParser.json());
app.use("/shorten", shortenRoutes);
app.use("/:id", shortedRoutes);
app.get("/", (req, res) => {
  res.send("home page");
});

export function start() {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}
