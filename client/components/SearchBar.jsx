/**
 * ************************************
 *
 * @module  SearchBar
 * @author
 * @date
 * @description presentation component that takes user input for stock and has option to buy
 *
 * ************************************
 */

import React from 'react';

const SearchBar = ({
  searchBar,
  updateSearch,
  searchStock,
}) => {
  console.log('searchbar:', searchBar);
  console.log('update search:', updateSearch);
  console.log('buyStock:', updateSearch);
  return (
    <div>
      {/* <form onSubmit={searchStock}> */}
        <input
          id="userInput"
          onInput={(e) => {
            return updateSearch(e.target.value);
          }}
          value={searchBar}
        />
        <button id='search-stock' className="primary" onClick={searchStock}>SEARCH</button>
      {/* </form> */}
    </div>
  );
}

export default SearchBar;