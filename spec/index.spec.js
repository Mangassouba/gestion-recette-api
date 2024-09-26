import Recipe from "../src/model/Recipe.js";

describe("Recipe tests", () => {
  let recipeId = null;

  it("can be create", async () => {
    const recipe = { titre: "crepe", type: "dessert", ingredient: "farime" };
    const result = await Recipe.createRecipe(
      recipe.titre,
      recipe.type,
      recipe.ingredient,
    );
    recipeId = result.insertId;
    const recipeCreated = await Recipe.getRecipeById(recipeId);
    expect(recipeId).not.toBeNull();
    expect(recipeCreated).not.toBeNull();
  });

  it("can not be create", async () => {
    try {
      const recipe = { titre: null, type: "dessert", ingredient: "farime" };
      const result = await Recipe.createRecipe(
        recipe.titre,
        recipe.type,
        recipe.ingredient,
      );
      recipeId = result.insertId;
      const recipeCreated = await Recipe.getRecipeById(recipeId);
      expect(recipeId).toBeNull();
      expect(recipeCreated).toEqual([]);
    } catch (err) {
      err.message;
    }
  });

  it("Can get all recipes", async () => {
    const getAll = await Recipe.getAllRecipes();
    expect(getAll).not.toBeNull();
  });

  it("Can get recipes By Id", async () => {
    const getById = await Recipe.getRecipeById();
    expect(getById).not.toBeNull();
  });

  it("Can be delete recipes", async () => {
    const destroy = await Recipe.deleteRecipe(14);
    expect(destroy).not.toBeNull();
  });

  it("Can be update recipe", async () => {
    const recipe = {
      id: 2,
      titre: "crepe",
      type: "dessert",
      ingredient: "farime",
    };
    const update = await Recipe.updateRecipe(
      recipe.id,
      recipe.titre,
      recipe.type,
      recipe.ingredient,
    );
    expect(update).not.toBeNull();
  });
});
