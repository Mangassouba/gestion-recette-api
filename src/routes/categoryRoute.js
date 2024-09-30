import express from "express";
import CategoryController from "../controlleurs/CategoryController.js";
import {
  addRequestValidator,
  deleteRequestValidator,
  updateValidator,
  getByIdValidator,
} from "../validators/categoryValidator.js";

const router = express.Router();

router.get("/category", CategoryController.getAllCategory);
router.get("/category/:id", getByIdValidator, CategoryController.getCategoryById);
router.post("/category", addRequestValidator, CategoryController.createCategory);
router.put("/category/:id", updateValidator, CategoryController.updateCategory);
router.delete("/category/:id", deleteRequestValidator, CategoryController.deleteCategory);

export default router;
