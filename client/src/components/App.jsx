import React from 'react';
import Title from './Title.jsx';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import InputField from './InputField.jsx';

var movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

const { useState } = React;

const App = (props) => {
  const [query, setQuery] = useState('');
  const [moviesList, setMovies] = useState(movies);
  const [filterMovies, setFilterMovies] = useState(movies);
  const [watched, setWatched] = useState(false);
  // movies.map((movie) => {
  //   movie.watched = watched;
  // });

  const handleInput = (e) => {
    e.preventDefault();
    // console.log(e.target.userInput.value);
    var newObj = { title: e.target.userInput.value, watched: watched };
    var newMovies = [...moviesList, newObj];
    var filterMov = [...filterMovies, newObj];
    setFilterMovies(filterMov);
    setMovies(newMovies);
    e.target.userInput.value = '';
  }

  // console.log(moviesList);
  const handleSearch = (e) => {
    e.preventDefault();
    let target = e.target.value; //userInput if event originates in field
    let filteredArr = [];
    for (let i = 0; i < moviesList.length; i++) {
      let currMovie = moviesList[i];
      if (currMovie.title.includes(target)) {
        filteredArr.push(currMovie);
      }
      // filteredArr.push({ title: 'Our library does not contain that movie :(' });
    }
    if (filteredArr.length >= 0) {
      setFilterMovies(filteredArr);
    } else {
      setFilterMovies([{ title: 'Our library does not contain that movie :(' }]);
    }
    // e.target.value = ''; //userInput if event originates in field
  }

  const handleSearchClick = (e) => {
    e.preventDefault();
    let target = e.target.userInput.value;
    let filteredArr = [];
    for (let i = 0; i < moviesList.length; i++) {
      let currMovie = moviesList[i];
      if (currMovie.title.includes(target)) {
        filteredArr.push(currMovie);
      }
    }
    if (filteredArr.length >= 0) {
      setFilterMovies(filteredArr);
    }
  }

  const handleWatched = (e, title) => {
    console.log('title', title);
    let copy = [...moviesList];
    for (let i = 0; i < copy.length; i++) {
      // console.log(copy[i]);
      if (copy[i].title === title) {
        copy[i].watched = !copy[i].watched;
        break;
      }
    }
    console.log(copy);
    // debugger;
    setWatched(!watched);
    // console.log(watched);
  }

  const handleSeeAll = (e) => {
    console.log(moviesList);
    let allVids = [];
    for (var i = 0; i < moviesList.length; i++) {
      allVids.push(moviesList[i]);
    }
    setFilterMovies(allVids);
  }

  const handleWatchedClick = (e) => {
    let WatchedArr = [];
    for (var i = 0; i < moviesList.length; i++) {
      if (moviesList[i].watched) {
        WatchedArr.push(moviesList[i]);
      }
    }
    setFilterMovies(WatchedArr);
  }

  return (
    <div id='movie-list-app'>
      <Title />
      <InputField handleInput={handleInput} />
      <Search handleSearch={handleSearch} handleSearchClick={handleSearchClick} />
      <MovieList
        movies={filterMovies}
        handleWatched={handleWatched}
        handleSeeAll={handleSeeAll}
        handleWatchedClick={handleWatchedClick}
      />
    </div>
  )
};

export default App;