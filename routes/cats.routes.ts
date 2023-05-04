import { Router } from "express";
import CatController from "../controllers/cats.controller";

const route = Router();
const catController = new CatController();

route.get("/random", catController.getRandomCat);

route.get("/breeds", catController.getAllCatBreeds);
route.get("/ages", catController.getAllCatAges);
route.get("/sizes", catController.getAllCatSizes);

route.get("/breed/:breed/random", catController.getRandomCatByBreed);
route.get("/age/:age/random", catController.getRandomCatByAge);
route.get("/size/:size/random", catController.getRandomCatBySize);

export default route;
