import db from "../config/db.js";

class Recipe {
  static async getAllCategory() {
    const results = await db.query("SELECT * FROM categorys");
    return results;
  }
  static async checkCategory(name) {
    const [rows] = await db.query(
      "SELECT COUNT(*) as count FROM categorys WHERE name = ?",
      [name],
    );
    return rows[0].count;
  }

  static async getCategoryByTitle(name) {
    const [rows] = await db.query("SELECT * FROM categorys WHERE name = ?", [
      name,
    ]);
    return rows[0];
  }

  static async getCategoryById(id) {
    const [result] = await db.query("SELECT * FROM categorys WHERE id = ?", [id]);
    return result;
  }

  static async createCategory(name) {
    const [result] = await db.query(
      "INSERT INTO categorys (name) VALUES (?)",
      [name],
    );
    return result;
  }

  static async updateCategory(id, name) {
    const result = await db.query(
      "UPDATE categorys SET name = ? WHERE id = ?",
      [name, id],
    );
    return result;
  }

  static async deleteCategory(id) {
    const [result] = await db.query("DELETE FROM categorys WHERE id = ?", [id]);
    return result;
  }
}

export default Recipe;
