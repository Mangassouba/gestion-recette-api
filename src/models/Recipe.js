import db from "../config/db.js";

class Recipe {
  static async getAllRecipes() {
    const results = await db.query("SELECT * FROM recipes");
    return results;
  }
  static async checkRecipe(titre) {
    const [rows] = await db.query(
      "SELECT COUNT(*) as count FROM recipes WHERE titre = ?",
      [titre],
    );
    return rows[0].count;
  }

  static async getRecipeByTitle(titre) {
    const [rows] = await db.query("SELECT * FROM recipes WHERE titre = ?", [
      titre,
    ]);
    return rows[0];
  }

  static async getRecipeById(id) {
    const [result] = await db.query("SELECT * FROM recipes WHERE id = ?", [id]);
    return result;
  }

  static async createRecipe(titre, type, ingredient, category_id) {
    const [result] = await db.query(
      "INSERT INTO recipes (titre, type, ingredient, category_id) VALUES (?, ?, ?, ?)",
      [titre, type, ingredient, category_id],
    );
    return result;
  }

  static async updateRecipe(id, titre, type, ingredient,category_id) {
    const result = await db.query(
      "UPDATE recipes SET titre = ?, type = ?, ingredient = ?, category_id = ? WHERE id = ?",
      [titre, type, ingredient, category_id, id],
    );
    return result;
  }

  static async deleteRecipe(id) {
    const [result] = await db.query("DELETE FROM recipes WHERE id = ?", [id]);
    return result;
  }
}

export default Recipe;
