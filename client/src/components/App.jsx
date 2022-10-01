const axios = require('axios');
import React from 'react';
import Title from './Title.jsx';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import InputField from './InputField.jsx';

var movies = [
  { title: 'Poke Girls' },
  { title: 'Tinot' },
  { title: 'The White' },
  { title: 'Block' },
  { title: 'Ex GF' },
];


const { useState, useEffect } = React;

const App = (props) => {
  const [query, setQuery] = useState('');
  const [moviesList, setMovies] = useState(movies);
  const [filterMovies, setFilterMovies] = useState(movies);

  useEffect(
    () => {
      axios.get('/api/movies')
        .then((res) => {
          console.log('response', res.data);
          changeMovies(res.data);
        })
        .catch((err) => {
          console.log('error', err);
        })
    }, []
  );

  const changeMovies = (movies) => {
    setMovies(movies);
    setFilterMovies(movies);
  }

  const handleInput = (e) => {
    e.preventDefault();
    // post then get
    axios.post('/api/movies', {
      title: e.target.userInput.value
    })
      .then(axios.get('/api/movies')
        .then((res) => {
          console.log('response', res.data);
          changeMovies(res.data);
        }))
      .catch((err) => {
        console.log('error', err);
      });
    // var newObj = { title: e.target.userInput.value, watched: false };
    // var newMovies = [...moviesList, newObj];
    // var filterMov = [...filterMovies, newObj];
    // setFilterMovies(filterMov);
    // setMovies(newMovies);
    e.target.userInput.value = '';
  }

  console.log(moviesList);
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
    console.log('clicked search');
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
    setFilterMovies(moviesList);
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