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
    db.query('INSERT INTO movies (title) VALUES (?)', [inputObj.title], (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(data);
      }
    })
  },
  updateWatched: (inputObj, callback) => {
    db.query(`UPDATE movies SET watched=? WHERE title=?`, [inputObj.watched, inputObj.title], (err, data) => {
      console.log('data', data);
      if (err) {
        callback(err);
      } else {
        callback(data);
      }
    })
  }
};