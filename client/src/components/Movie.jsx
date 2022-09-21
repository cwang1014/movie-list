import React from 'react';

const Movie = (props) => {
  // console.log(movie);
  return (
    <div id="movie">
      {props.movie.title}
      <button
        onClick={(e) => { props.handleWatched(e, props.movie.title) }}
      >{props.movie.watched ? 'Watched' : 'To Watch'}</button>
    </div>
  )
}

export default Movie;