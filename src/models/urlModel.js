import {pool} from "../config/database.js";

export async function saveUrl(originalUrl, id) {
  await pool.query(
    `
        INSERT INTO urls (id, original_url)
        VALUES (?,?)
    `,
    [id, originalUrl]
  );
}
