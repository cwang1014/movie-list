import React from 'react';

const InputField = ({ handleInput }) => {
  return (
    <form onSubmit={handleInput}>
      <input
        type='text'
        placeholder='Add movie title here'
        name="userInput"
      />
      <button>Add</button>
    </form>
  )
}

export default InputField;