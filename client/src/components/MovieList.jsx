import React from 'react';
import Movie from './Movie.jsx';
import ToWatch from './ToWatch.jsx';
import Watched from './Watched.jsx';

const MovieList = ({ movies, handleWatched, handleToWatchClick, handleWatchedClick }) => {
  // console.log(movies);
  return (
    <div id='movie-list'>
      <ToWatch handleToWatchClick={handleToWatchClick} />
      <Watched handleWatchedClick={handleWatchedClick} />{
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