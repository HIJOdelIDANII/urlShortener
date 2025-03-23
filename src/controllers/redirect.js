import { originalUrl } from "../models/urlModel.js";
import { addCount } from "../models/urlModel.js";
export const redirectToURL = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const original = await originalUrl(id);
    await addCount(id);

    if (!original) {
      return res.status(404).json({ error: "Invalid short URL" });
    }
    return res.redirect(302, original);
  } catch (error) {
    console.error("Redirect error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
