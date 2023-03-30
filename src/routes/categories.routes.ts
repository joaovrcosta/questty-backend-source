import { Router } from "express";
import { CategoriesRepository } from "../modules/questions/repositories/implementations/CategoriesRepository";
import { createCategoryController } from "../modules/questions/useCases/createCategory";
import { listCategoriesController } from "../modules/questions/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
