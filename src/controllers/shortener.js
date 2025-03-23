import { nanoid } from "nanoid";
import { saveUrl } from "../models/urlModel.js";

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export const shorten = async (req, res) => {
  const { url } = req.body;
  if (!url || !isValidUrl(url)) {
    return res.status(400).json({ error: "Invalid URL provided" });
  }

  const BASE_URL = process.env.BASE_URL;
  const id = nanoid(6);
  const shortUrl = `${BASE_URL}/${id}`;
  await saveUrl(url, id);

  res.status(201).json({ shortUrl });
};
