const express = require("express");
const omdb = require("../services/omdb");
const router = express.Router();

router.get("/movies", async (req, res) => {
  const movies = await omdb.getMovieByTitle(req.query.q);
  await res.json(movies);
});

router.get("/:imdbID", async (req, res) => {
  const movie = await omdb.getMovieById(req.params.imdbID);
  await res.json(movie);
});

module.exports = router;
