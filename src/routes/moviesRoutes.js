const express = require("express");
const router = express.Router();

const controllers = require("../controllers/movieControllers");


//Demanda: ver todos os filmes disponíveis
router.get("/all", controllers.getAll);
router.post("/create", controllers.createMovie);
router.get("/ghibli", controllers.getAllGhibliMovies);

module.exports = router;

