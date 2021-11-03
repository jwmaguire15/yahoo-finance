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

// EDIT EVERYTHING IN HERE


import axios from 'axios';
import * as types from '../constants/actionTypes';

export const updateSearch = data => ({
  type: types.UPDATE_SEARCH,
  payload: data,
});

export const buyStock = () => ({
  type: types.BUY_STOCK,
});

export const searchStock = () => (dispatch, getState) => {
  console.log('called?')
  const options = {
    method: 'GET',
    url: '/search',
    data: {symbol: getState().stocks.searchBar},
  }
  axios.request(options).then((response) => {
    console.log(response.data)
    if (response.status = 200) dispatch({
      type: types.SEARCH_STOCK,
      payload: response.data, 
    });
  }).catch(console.error)
  
};

// export const addCard = id => ({
//   type: types.ADD_CARD,
//   payload: id,
// });

// export const deleteCard = id => (dispatch, getState) => {
//   if (getState().markets.marketList[id].cards > 0) {
//     dispatch({ type: types.DELETE_CARD, payload: id });
//   }
// };

// export const addMarket = event => (dispatch, getState) => {
//   event.preventDefault();
//   const location = getState().markets.newLocation;
//   if (location) {
//     dispatch({
//       type: types.ADD_MARKET,
//       payload: location,
//     });
//   }
// };

// export const syncMarkets = () => (dispatch, getState) => {
//   axios.put('/markets', getState().markets.marketList)
//     .then(({ status }) => {
//       if (status === 200) dispatch({ type: types.SYNC_MARKETS });
//     })
//     .catch(console.error);
// };

// export const loadMarkets = () => (dispatch) => {
//   axios.get('/markets')
//     .then(({ data }) => {
//       dispatch({
//         type: types.LOAD_MARKETS,
//         payload: data,
//       });
//     })
//     .catch(console.error);
// };
