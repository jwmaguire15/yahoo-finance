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
  buyStock,
}) => {
  console.log('searchbar:', searchBar);
  console.log('update search:', updateSearch);
  console.log('buyStock:', updateSearch);
  return (
    <div>
      {/* <form onSubmit={buyStock}> */}
      <input
        id="search"
        value={searchBar}
        onChange={e => {
          console.log(e);
          console.log(e.target.value);
          return updateSearch(e.target.value);
        }}
      />
      <button id='buy-stock' className="primary" type="submit">BUY!</button>
      {/* </form> */}
    </div>
  );
}

export default SearchBar;