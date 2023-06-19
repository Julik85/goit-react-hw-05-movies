import React,  { useState } from 'react'
import { Notify } from 'notiflix';
import PropTypes from 'prop-types'



function SearchForm({ onSubmit, message }) {
  const [inputQuery, setInputQuery] = useState('');

  const handleSearch = event => {
    setInputQuery(event.currentTarget.value);
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    if (inputQuery.trim() === '') {
      Notify.warning(`Enter something`);
     
      return;
    }
    onSubmit(inputQuery.trim());
    setInputQuery('');
  };

  return (
    <div>
      <form className="searchbar-form" onSubmit={handleSubmit}>

        <input
          className="searchbar-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies by name"
          value={inputQuery}
          onChange={handleSearch}
        />
        <button type="submit" className="searchbar-button">
        Search
        </button>
      </form>     
    </div>
  )
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default SearchForm