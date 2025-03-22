import { Router } from "express";
import { shorten } from "./controllers/shortener.js";

export const shortenRoutes = Router();
export const shortedRoutes = Router();

shortenRoutes.post("/", shorten);

shortedRoutes.get("/");



