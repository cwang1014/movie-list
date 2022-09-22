import React from 'react';

const Search = ({ handleSearch, setQuery, query }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); console.log('e.target.userInput', e.target.userInput.value); }}>
      <input
        type='text'
        placeholder='Search...'
        name="userInput"
        onChange={(e) => { handleSearch(e) }} // e.target.value for input from user
      />
      <button>Go!</button>
    </form>
  )
}

export default Search;