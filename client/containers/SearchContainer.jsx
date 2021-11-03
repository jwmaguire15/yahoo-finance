/**
 * ************************************
 *
 * @module  PortfolioContainer
 * @author
 * @date
 * @description component that renders Search and graph
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import SearchBar from '../components/SearchBar';

const mapStateToProps = ({ stocks }) => ({
  searchBar: stocks.searchBar,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// ({
//   updateSearch: (data) => dispatch(actions.updateSearch(data)),
//   buyStock: () => dispatch(actions.buyStock()),
// });

const SearchContainer = (props) => (
  <div className="searchContainer">
    <h2 className="header">Search</h2>
    {/* <StockChart /> */}
    <SearchBar
      searchBar={props.searchBar}
      updateSearch={props.updateSearch}
      searchStock={props.searchStock}
    />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);