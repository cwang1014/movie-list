// hdnale for all movies
var db = require('../db');

module.exports = {
  getMovies: (callback) => {
    db.query('SELECT * FROM movies', (err, movies) => {
      if (err) {
        callback(err);
      } else {
        callback(null, movies);
      }
    });
  },
  addMovie: (inputObj, callback) => {
    db.query('INSERT INTO movies (title) VALUES (?)', [inputObj.title], (err) => {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    })
  }
};