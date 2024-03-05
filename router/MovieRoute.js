import express from "express";
import { verifyUser } from "../middleware/AuthUser.js";
import {
  getMovies,
  getMoviesById,
  createMovies,
  updateMovies,
  deleteMovies,
} from "../controller/movieController.js";
const Movierouter = express.Router();

Movierouter.get("/", function (req, res) {
  res.send("Selamat Datang Di Homework 9 RestFul API with Express Js");
});

//Movierouter For Movie
Movierouter.get("/api/movies", verifyUser, getMovies); //Show all movies
Movierouter.get("/api/movies/:id", verifyUser, getMoviesById); //show movies with id
Movierouter.post("/api/movies", verifyUser, createMovies); //create a new movie
Movierouter.put("/api/movies/:id", verifyUser, updateMovies); //Update a movie with id
Movierouter.delete("/api/movies/:id", deleteMovies);//Delete a movie with id

export default Movierouter;
