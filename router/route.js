import express from "express";
import { getMovies } from "../controller/movieController.js";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Selamat Datang Di Homework 9 RestFul API with Express Js");
});

router.get("/api/movies", getMovies); //menampilkan seluruh movies

export default router;
