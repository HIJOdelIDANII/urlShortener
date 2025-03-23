import { pool } from "../config/database.js";

export async function saveUrl(originalUrl, id) {
  await pool.query(
    `
        INSERT INTO urls (id, original_url)
        VALUES (?,?)
    `,
    [id, originalUrl]
  );
}
export async function originalUrl(id) {
  try {
    const [rows] = await pool.query(
      `SELECT original_url from urls where id = ?`,
      [id]
    );
    return rows.length ? rows[0].original_url : null;
  } catch (error) {
    console.error("Error fetching original URL:", error);
    throw error;
  }
}
