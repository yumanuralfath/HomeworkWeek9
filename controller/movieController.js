import movies from "../models/movies.js";

//get all movies
export const getMovies = async (req, res) => {
  try {
    const response = await movies.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error.message });
  }
};

//Get movies from the database by Id
export const getMoviesById = async (req, res) => {
  try {
    let whereCondition;
    if (
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
        req.params.id
      )
    ) {
      whereCondition = { id: req.params.id };
    } else if (!isNaN(req.params.id)) {
      whereCondition = { id: req.params.id };
    } else {
      return res.status(400).json({ msg: "Invalid ID format" });
    }

    const movie = await movies.findOne({
      where: whereCondition,
    });

    if (!movie) {
      return res.status(404).json({ msg: "Movie not found" });
    }

    res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

//Create a new movie
export const createMovies = async (req, res) => {
  try {
    const { id, title, genres, year } = req.body;
    const movie = await movies.create({
      id,
      title,
      genres,
      year,
    });
    res.status(201).json({ msg: "Movie created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.error(error.message);
  }
};

//update movie by Id
export const updateMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, genres, year } = req.body;

    //Check availability Id
    const existingMovies = await movies.findByPk(id);
    if (!existingMovies) {
      res.status(404).json({ error: "Movies not found" });
    }
    await existingMovies.update({
      title: title || existingMovies.title,
      genres: genres || existingMovies.genres,
      year: year || existingMovies.year,
    });

    //send response to client movie get update
    res.status(200).json({ msg: "Movie updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Delete a movie by Id(
export const deleteMovies = async (req, res) => {
  try {
    const { id } = req.params;

    //Check if id exists
    const existingMovies = await movies.findByPk(id);
    if (!existingMovies) {
      return res.status(404).json({ error: "Movie not found" });
    }

    await existingMovies.destroy();
    res.status(200).json({ msg: "Movie deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
