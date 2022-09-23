import React from 'react';

const Watched = ({ handleWatchedClick }) => {
  return (
    <button id="movie-list-button" onClick={handleWatchedClick}>Watched</button>
  )
}

export default Watched;