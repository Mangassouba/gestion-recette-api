import Category from "../model/Category.js";


class CategoryController {
  static async getAllCategory(req, res) {
    try {
      const [category] = await Category.getAllCategory();
      res.status(200).json(category);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getCategoryById(req, res) {
    try {
      const { id } = req.params;
      const recipe = await Category.getCategoryById(id);
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json({ message: "Recipe not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async createCategory(req, res) {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const result = await Category.createCategory(
        name
      );
      res.status(201).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const updatedCategory = await Category.updateCategory(
        id,
        name
      );
      if (updatedCategory) {
        res
          .status(200)
          .json({ message: "Recette à été mise à jour avec succès" });
      } else {
        res.status(404).json({ message: "Recipe not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const result = await Category.deleteCategory(id);
      if (result.affectedRows > 0) {
        res.status(200).json({ message: "Recette supprimée avec succès" });
      } else {
        res.status(404).json({ message: "Recette non trouvée" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default CategoryController;
