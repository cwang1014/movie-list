import React from 'react';
import Movie from './Movie.jsx';
import SeeAll from './SeeAll.jsx';
import Watched from './Watched.jsx';
import ToWatch from './ToWatch.jsx';

const MovieList = ({ movies, handleWatched, handleSeeAll, handleWatchedClick, handleToWatchClick }) => {
  // console.log(movies);
  return (
    <div id='movie-list'>
      <Watched handleWatchedClick={handleWatchedClick} />
      <ToWatch handleToWatchClick={handleToWatchClick} />
      <SeeAll handleSeeAll={handleSeeAll} />{
        movies.map((movie) => {
          return (
            <div key={movie.title} >
              <Movie movie={movie} handleWatched={handleWatched} />
            </div>
          )
        })}
    </div>
  )
}

export default MovieList;