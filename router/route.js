import express from "express";
import {
  getMovies,
  getMoviesById,
  createMovies,
  updateMovies,
  deleteMovies,
} from "../controller/movieController.js";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Selamat Datang Di Homework 9 RestFul API with Express Js");
});

//router For Movie
router.get("/api/movies", getMovies); //Show all movies
router.get("/api/movies/:id", getMoviesById); //show movies with id
router.post("/api/movies", createMovies); //create a new movie
router.put("/api/movies/:id", updateMovies); //Update a movie with id
router.delete("/api/movies/:id", deleteMovies);//Delete a movie with id

export default router;
