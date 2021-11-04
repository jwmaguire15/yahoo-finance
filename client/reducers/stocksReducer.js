/**
 * ************************************
 *
 * @module  stocksReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  searchBar: '',
  range: '1d',
  chartData: [],
  orderList: [
    {
      ticker: 'ABC',
      type: 'BUY',
      price: 100,
      timestamp: new Date(Date.now()).toJSON(),
      expiration: '1/2/2021'
    },
  ],
  transactionList: [
    {
      ticker: 'ABC',
      type: 'SELL',
      price: 100,
      timestamp: new Date(Date.now()).toJSON(),
      expiration: '1/2/2021'
    },
  ],
  stockList: [],
};


const stocksReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case types.UPDATE_SEARCH:
      return {
        ...state,
        searchBar: action.payload,
      };
    case types.UPDATE_RANGE:
      console.log(action.payload);
      return {
        ...state,
        range: action.payload,
      };

    case types.BUY_STOCK:
      return state;
    // should: 
    // 1. check for valid input from user  
    // 2. create an order at current market price
    // 3. clear stock search bar

    case types.SEARCH_STOCK: {
      const raw = action.payload;
      const time = raw['chart']['result'][0]['timestamp'];
      const price = raw['chart']['result'][0]['indicators']['quote'][0]['close'];

      const data = [];
      for (let i = 0; i < time.length; i++) {
        
        data.push({
          name: new Date(time[i] * 1000),
          // name: date,
          price: price[i],
          // time: time[i],
        });
      }
      console.log(data);

      return {
        ...state,
        chartData: data,
      }
    }

    default:
      return state;
  }
};

export default stocksReducer;

