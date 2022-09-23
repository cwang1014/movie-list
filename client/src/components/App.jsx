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

// movies.forEach((element) => {
//   element.watched = false;
// });

const { useState } = React;

const App = (props) => {
  const [query, setQuery] = useState('');
  const [moviesList, setMovies] = useState(movies);
  const [filterMovies, setFilterMovies] = useState(movies);
  // const [watched, setWatched] = useState(false);
  // movies.map((movie) => {
  //   movie.watched = watched;
  // });

  const handleInput = (e) => {
    e.preventDefault();
    // console.log(e.target.userInput.value);
    var newObj = { title: e.target.userInput.value, watched: false };
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
    e.target.userInput.value = '';
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

  const handleToWatchClick = (e) => {
    let ToWatchArr = [];
    for (var i = 0; i < moviesList.length; i++) {
      if (!moviesList[i].watched) {
        ToWatchArr.push(moviesList[i]);
      }
    }
    setFilterMovies(ToWatchArr);
  }

  return (
    <div id='movie-list-app'>
      <Title />
      <InputField handleInput={handleInput} />
      <Search handleSearch={handleSearch} handleSearchClick={handleSearchClick} />
      <MovieList
        movies={filterMovies}
        handleSeeAll={handleSeeAll}
        handleWatchedClick={handleWatchedClick}
        handleToWatchClick={handleToWatchClick}
      />
    </div>
  )
};

export default App;