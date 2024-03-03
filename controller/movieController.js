import movies from "../models/movies.js";
//mendapatkan semua movies
export const getMovies = async (req, res) => {
  try {
    const response = await movies.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error.message });
  }
};
