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
// import { buyStock, updateRange } from '../actions/actions';

const SearchBar = ({
  searchBar,
  updateSearch,
  updateRange,
  searchStock,
  buyStock,
}) => {
  return (
    <div className="searchBar">
      <input
        id="userInput"
        onInput={(e) => {
          return updateSearch(e.target.value);
        }}
        value={searchBar}
      />
      <span className="dataList">
        <label>Range:</label>
        <select id="range" onChange={e => {
          return updateRange(e.target.value);
        }}>
          <option value="1d">1d</option>
          <option value="5d">5d</option>
          <option value="1mo">1mo</option>
          <option value="3mo">3mo</option>
          <option value="6mo">6mo</option>
          <option value="1y">1y</option>
          <option value="2y">2y</option>
          <option value="5y">5y</option>
          <option value="10y">10y</option>
          <option value="ytd">ytd</option>
          <option value="max">max</option>
        </select>
      </span>
      <button id='search-stock' className="primary" onClick={searchStock}>SEARCH</button>
      <button id='buy-stock' className="primary" onClick={buyStock}>BUY!</button>

    </div>
  );
}

export default SearchBar;