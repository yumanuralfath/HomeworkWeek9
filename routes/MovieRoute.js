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

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: The Movies Managing API
 * /api/movies:
 *   get:
 *     summary: Lists all the movie with paginated default 10 results per page
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: The list of the Movies 
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 * /books/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */

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
