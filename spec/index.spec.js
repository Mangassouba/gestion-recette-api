import Recipe from "../src/models/Recipe.js";
import Category from "../src/models/Category.js";

describe("Recipe tests", () => {
  let recipeId = null;

  it("can be create", async () => {
    const recipe = {
      titre: "crepe",
      type: "dessert",
      ingredient: "farine",
      category_id: 1,
    };
    const result = await Recipe.createRecipe(
      recipe.titre,
      recipe.type,
      recipe.ingredient,
      recipe.category_id,
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

describe("Category tests", () => {
  let categoryId = null;

  it("can be create Category", async () => {
    const recipe = { name: "crepe" };
    const result = await Category.createCategory(recipe.name);
    categoryId = result.insertId;
    const categoryCreated = await Category.getCategoryById(categoryId);
    expect(categoryId).not.toBeNull();
    expect(categoryCreated).not.toBeNull();
  });

  it("can not be create Category", async () => {
    try {
      const recipe = { name: null };
      const result = await Category.createCategory(recipe.titre);
      categoryId = result.insertId;
      const recipeCreated = await Category.getCategoryById(categoryId);
      expect(categoryId).toBeNull();
      expect(recipeCreated).toEqual([]);
    } catch (err) {
      err.message;
    }
  });

  it("Can get all category", async () => {
    const getAll = await Category.getAllCategory();
    expect(getAll).not.toBeNull();
  });

  it("Can get category By Id", async () => {
    const getById = await Category.getCategoryById();
    expect(getById).not.toBeNull();
  });

  it("Can be delete category", async () => {
    const destroy = await Category.deleteCategory(14);
    expect(destroy).not.toBeNull();
  });

  it("Can be update category", async () => {
    const category = {
      id: 2,
      name: "crepe",
      ingredient: "farine",
    };
    const update = await Category.updateCategory(category.id, category.name);
    expect(update).not.toBeNull();
  });
});
