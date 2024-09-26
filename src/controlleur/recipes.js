import Recipe from "../model/Recipe.js";

class RecipeController {
  static async getAllRecipes(req, res) {
    try {
      const [recipes] = await Recipe.getAllRecipes();
      res.status(200).json(recipes);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getRecipeById(req, res) {
    try {
      const { id } = req.params;
      const recipe = await Recipe.getRecipeById(id);
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

  static async createRecipe(req, res) {
    try {
      const { titre, type, ingredient } = req.body;
      if (!titre || !type || !ingredient) {
        return res.status(400).json({ message: "All fields are required" });
      }
       await Recipe.createRecipe(titre, type, ingredient);
      res.status(201).json({"message": "Recette ajouter avec succès"});
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async updateRecipe(req, res) {
    try {
      const { id } = req.params;
      const { titre, type, ingredient } = req.body;
      if (!titre || !type || !ingredient) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const updatedRecipe = await Recipe.updateRecipe(
        id,
        titre,
        type,
        ingredient,
      );
      if (updatedRecipe) {
        res.status(200).json({"message": "Recette mise à jour avec succès"});
      } else {
        res.status(404).json({ message: "Recipe not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async deleteRecipe(req, res) {
    try {
      const { id } = req.params;
      const result = await Recipe.deleteRecipe(id);
      if (result) {
        res.status(204).end({"message": "Recette supprimée avec succès"});
      } else {
        res.status(404).json({ message: "Recipe not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default RecipeController;
