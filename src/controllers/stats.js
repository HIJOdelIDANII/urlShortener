import { getCount } from "../models/urlModel.js";

export const stats = async (req, res) => {
  const id = req.params.id;
  try {
    const count = await getCount(id);
    if ( count == undefined) {
      return res.status(404).json({ error: "Invalid short URL" });
    }
    return res.status(200).json({ count });
  } catch (error) {
    console.error("Adding count error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
