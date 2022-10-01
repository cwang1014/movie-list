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
    models.addMovie(body, (err) => {
      if (!err) {
        res.status(201).end();
      }
    });
  },
  put: (req, res) => {
    // console.log('we made it');
    let body = req.body;
    models.updateWatched(body, (err, data) => {
      if (!err) {
        res.status(200).end();
      }
    });
  }
};

// middleman