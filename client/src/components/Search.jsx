import React from 'react';

const Search = ({ handleSearch, handleSearchClick }) => {
  return (
    <form id="search" onSubmit={(e) => { handleSearchClick(e); }}>
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