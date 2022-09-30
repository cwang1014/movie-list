import React from 'react';

const { useState } = React;

const Movie = (props) => {
  const [watched, setWatched] = useState(false);

  const handleWatched = (e, title) => {
    // console.log('title', title);
    let copy = [...props.movies];
    for (let i = 0; i < copy.length; i++) {
      // console.log(copy[i]);
      if (copy[i].title === title) {
        copy[i].watched = !copy[i].watched;
        setWatched(copy[i].watched);
        break;
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