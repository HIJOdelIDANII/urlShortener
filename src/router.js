import { Router } from "express";
import { shorten } from "./controllers/shortener.js";

export const routes = Router();
routes.post("/", shorten);
