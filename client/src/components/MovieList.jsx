import React from 'react';
import Movie from './Movie.jsx';

const MovieList = ({ movies, handleWatched }) => {
  // console.log(movies);
  return (
    <div id='movie-list'>{
      movies.map((movie) => {
        return (
          <div>
            <Movie movie={movie} key={movie.title} handleWatched={handleWatched} />
          </div>
        )
      })}
    </div>
  )
}

export default MovieList;