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
    let body = req.body;
    // console.log('body', body);
    models.addMovie(body, (err, res) => {
      if (!err) {
        res.status(201).end();
      }
    });
  }
};

// middleman