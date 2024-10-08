import { check, param, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import Recipe from "../models/Recipe.js";

const addRequestValidator = [
  check("titre")
    .not()
    .isEmpty()
    .withMessage("Titre ne peut pas être vide!")
    .bail()
    .isLength({ min: 5, max: 100  })
    .withMessage("Le titre doit contenir entre 6 et 100 caractères !")
    .bail(),
  check("type")
    .optional()
    .not()
    .isEmpty()
    .isIn(["Entrée", "Plat", "Dessert"])
    .withMessage("Le type ne peut pas être vide."),
  check("ingredients")
    .optional()
    .isArray({ min: 1 })
    .withMessage("Les ingrédients doivent être une liste.")
    .isLength({ min: 10, max: 500 })
    .custom(async (value) => {
      const result = await Recipe.getRecipeByTitle(value);
      if (result) {
        throw new Error("Cette recette existe déjà!");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const deleteRequestValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("Id est obligatoire!")
    .bail()
    .custom(async (value) => {
      const recipe = await Recipe.getRecipeById(value);
      if (!recipe) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const getByIdValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("L'ID est obligatoire.")
    .bail()
    .custom(async (value) => {
      const result = await Recipe.getRecipeById(value);
      if (!result) {
        throw new Error("Cette recette n'existe pas.");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    }
    next();
  },
];

const updateValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("L'ID est obligatoire.")
    .bail()
    .custom(async (value) => {
      const result = await Recipe.getRecipeById(value);
      if (!result) {
        throw new Error("Cette recette n'existe pas.");
      }
      return true;
    }),
  check("titre")
    .optional()
    .isLength({ min: 5, max: 100  })
    .withMessage("Le titre doit contenir entre 6 et 100 caractères !"),
  check("type")
    .optional()
    .not()
    .isEmpty()
    .withMessage("Le type ne peut pas être vide."),
  check("ingredients")
    .optional()
    .isArray({ min: 1 })
    .isLength({ min: 10, max: 500 })
    .withMessage("Les ingredinets doit contenir entre 10 et 500 caractères !"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    }
    next();
  },
];

export {
  addRequestValidator,
  deleteRequestValidator,
  updateValidator,
  getByIdValidator,
};
