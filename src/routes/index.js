import express from "express";
import RecipeController from "../controlleurs/RecipeController.js";
import {
  addRequestValidator,
  deleteRequestValidator,
  updateValidator,
  getByIdValidator,
} from "../validators/recipeValidator.js";

const router = express.Router();

router.get("/recipes", RecipeController.getAllRecipes);
router.get("/recipes/:id", getByIdValidator, RecipeController.getRecipeById);
router.post("/recipes", addRequestValidator, RecipeController.createRecipe);
router.put("/recipes/:id", updateValidator, RecipeController.updateRecipe);
router.delete(
  "/recipes/:id",
  deleteRequestValidator,
  RecipeController.deleteRecipe,
);

export default router;
