import React from 'react';

const ToWatch = ({ handleToWatchClick }) => {
  return (
    <button id="movie-list-button" onClick={handleToWatchClick}>To Watch</button>
  )
}

export default ToWatch;