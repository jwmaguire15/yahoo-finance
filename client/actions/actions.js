/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

import axios from 'axios';
import * as types from '../constants/actionTypes';

export const updateSearch = data => ({
  type: types.UPDATE_SEARCH,
  payload: data,
});

export const updateRange = data => ({
  type: types.UPDATE_RANGE,
  payload: data,
});

export const buyStock = () => (dispatch, getState) => {
  // grab the symbol from state
  const sym = getState().stocks.searchBar;
  const user_id = getState().stocks.user_id;
  // hit API to get current price of stock
  const options = {
    method: 'POST',
    url: '/transaction',
    data: {user_id},
    params: {region: 'US', symbols: sym}
  }
  // make a post to the stocks database adding the stock name and current price
  // make a post to the transactions database with the current user and the stock ID and time, sold price/sold time null
  axios.request(options).then((response) => {
    if(response.status = 201) dispatch({
      type: types.BUY_STOCK,
      payload: response.data,
    });
  }).catch(console.error);
  // hit reducer to update state with the new query of all transactions...
};

export const sellStock = (data) => (dispatch) => {
  // grab the symbol from state
  
  const {ticker, transaction_id} = data;
  
  console.log(ticker);
  console.log(transaction_id);

  const options = {
    method: 'PUT',
    url: '/transaction',
    data: {transaction_id},
    params: {region: 'US', symbols: ticker}
  }
  // [{"transaction_id":6,"user_id":1,"stock_name":"Apple Inc.","bought_price":"$151.32","bought_time":"2021-11-04T04:00:00.000Z","sold_price":"$150.66","sold_time":"2021-11-04T04:00:00.000Z","stock_ticker":"aapl"}]
  axios.request(options).then((response) => {
    if(response.status = 201) dispatch({
      type: types.SELL_STOCK,
      payload: response.data,
    });
  }).catch(console.error);
  

};

export const searchStock = () => (dispatch, getState) => {
  const sym = getState().stocks.searchBar;
  const range = getState().stocks.range;
  let ivl = '1d';
  if(range.includes('d') && range != 'ytd') ivl = '5m';
  
  const options = {
    method: 'GET',
    url: '/search',
    // grab symbol from state, grab interval from state
    params: {interval: ivl, symbol: sym, range: range, region: 'US'}
  }
  axios.request(options).then((response) => {
    console.log(response.data)
    if (response.status = 200) dispatch({
      type: types.SEARCH_STOCK,
      payload: response.data, 
    });
  }).catch(console.error)
  
};

export const loadData = () => (dispatch, getState) => {
  // grab the symbol from state
  const user_id = getState().stocks.user_id;
  const options = {
    method: 'GET',
    url: '/transaction',
    params: {user_id},
  }
  axios.request(options).then((response) => {
    if(response.status = 201) {
      dispatch({
        type: types.BUY_STOCK,
        payload: response.data['buys'],
      });
      dispatch({
        type: types.SELL_STOCK,
        payload: response.data['sells'],
      });
    }
  }).catch(console.error);
};
