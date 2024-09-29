import { check, param, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import Recipe from "../models/Recipe.js";

const addRequestValidator = [
  check("titre")
    .not()
    .isEmpty()
    .withMessage("Titre ne peut pas être vide!")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Minimum 3 caractères requis!")
    .bail()
    .custom(async (value) => {
      const result = await Recipe.getRecipeByTitle(value);
      if (result == 0) {
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
    .isLength({ min: 6 })
    .withMessage("Le titre doit contenir au moins 6 caractères."),
  check("type")
    .optional()
    .not()
    .isEmpty()
    .withMessage("Le type ne peut pas être vide."),
  check("ingredients")
    .optional()
    .isArray({ min: 1 })
    .withMessage("Les ingrédients doivent être une liste."),
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
