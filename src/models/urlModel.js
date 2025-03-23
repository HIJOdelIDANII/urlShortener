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
export async function addCount(id) {
  try {
    const [rows] = await pool.query(
      `UPDATE urls
            SET click_count = click_count + 1
            WHERE id = ?`,
      [id]
    );
    return rows.length ? rows[0].original_url : null;
  } catch (error) {
    console.error("Error fetching original URL:", error);
    throw error;
  }
}
export async function getCount(id) {
  try {
    const [rows] = await pool.query(
      `select click_count from urls where id = ?`,
      [id]
    );
    return rows.length ? rows[0].click_count : null;
  } catch (error) {
    console.log("error getting count", error);
    throw error;
  }
}
