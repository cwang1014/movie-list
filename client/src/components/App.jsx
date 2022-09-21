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
  const [moviesList, setMovies] = useState([]);
  // const [watched, setWatched] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    // console.log(e.target.userInput.value);
    var newObj = { title: e.target.userInput.value, watched: false };
    var newArr = [...moviesList, newObj];
    setMovies(newArr);
    e.target.userInput.value = '';
  }

  // console.log(moviesList);
  const handleSearch = (e) => {
    e.preventDefault();
    let target = e.target.userInput.value;
    let filteredArr = [];
    for (let i = 0; i < moviesList.length; i++) {
      let currMovie = moviesList[i];
      if (currMovie.title.includes(target)) {
        filteredArr.push(currMovie);
      }
      // filteredArr.push({ title: 'Our library does not contain that movie :(' });
    }
    if (filteredArr.length >= 0) {
      setMovies(filteredArr);
    } else {
      setMovies([{ title: 'Our library does not contain that movie :(' }]);
    }
    e.target.userInput.value = '';
  }

  const handleWatched = (e, title) => {
    console.log('title', title);
    var copy = [...moviesList];
    for (var i = 0; i < copy.length; i++) {
      if (copy[i].title === title) {
        copy[i].watched = !copy[i].watched;
        break;
      }
    }
    setMovies(copy);
    // console.log('app e handler', e.target.innerHTML);
    // let buttonTxt = e.target.innerHTML;
    // if (buttonTxt === 'To Watch') {
    //   setWatched(true);
    // } else {
    //   setWatched(false);
    // }
  }

  return (
    <div id='movie-list-app'>
      <Title />
      <InputField handleInput={handleInput} />
      <Search handleSearch={handleSearch} />
      <MovieList movies={moviesList} handleWatched={handleWatched} />
    </div>
  )
};

export default App;