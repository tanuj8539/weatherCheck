import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSearch} className='search-bar'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter city name"
        className='search-bar-input'
      />
      <button type="submit" className='search-button'>Search</button>
    </form>
  );
}

export default SearchBar;