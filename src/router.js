import { Router } from "express";
import { shorten } from "./controllers/shortener.js";
import { stats } from "./controllers/stats.js";
import { redirectToURL } from "./controllers/redirect.js";
export const shortenRoutes = Router();
export const shortedRoutes = Router({ mergeParams: true });

shortenRoutes.post("/", shorten);

shortedRoutes.get("/", redirectToURL);
shortedRoutes.get("/stats", stats);
