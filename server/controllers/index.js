// handle for all movies
var models = require('../models');

module.exports = {
  get: (req, res) => {
    models.getMovies((err, movies) => {
      if (!err) {
        res.status(200).json(movies);
      }
    });
  },
  post: (req, res) => {
    models.addMovie((err, movie) => {
      if (!err) {
        res.status(201).json(movie);
      }
    });
  }
};