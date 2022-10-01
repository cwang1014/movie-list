const axios = require('axios');
import React from 'react';

const { useState, useEffect } = React;

const Movie = (props) => {
  const [watched, setWatched] = useState(false);

  const handleWatched = (e, title) => {
    // console.log('title', title);
    let copy = [...props.movies];
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].title === title) {
        if (copy[i].watched === 1) {
          copy[i].watched = 0;
        } else {
          copy[i].watched = 1;
        }
        axios.put('/api/movies', { title: copy[i].title, watched: copy[i].watched })
        // .then((res) => {
        //   console.log('watched res data', res.data);
        // })
        // .catch((err) => {
        //   console.log('error patching', err);
        // });
        console.log('copy[i]', copy[i]);

        // copy[i].watched = !copy[i].watched;
        setWatched(copy[i].watched);
        // console.log('copy[i] from watched', copy[i]);

      }
    }
  }

  return (
    <div id="movie">
      {props.movie.title}
      <button
        id="movie-button"
        onClick={(e) => { handleWatched(e, props.movie.title) }}
      >{props.movie.watched ? 'Watched' : 'To Watch'}</button>
    </div>
  )
}

export default Movie;