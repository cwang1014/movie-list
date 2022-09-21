import React from 'react';

const Search = ({ handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        placeholder='Search...'
        name="userInput"
      />
      <button>Go!</button>
    </form>
  )
}

export default Search;