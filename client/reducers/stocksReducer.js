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
  user_id: 1,
  orderList: [],
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

    case types.BUY_STOCK: {
      const orderList = state.orderList.slice();
      // {"transaction_id":6,"user_id":1,"stock_name":"Apple Inc.","bought_price":"$151.32","bought_time":"2021-11-04T04:00:00.000Z","sold_price":null,"sold_time":null,"stock_ticker":"aapl"}]
      action.payload.forEach(el => {
        const { transaction_id, stock_ticker, bought_price, bought_time } = el;
        orderList.unshift({
          id: transaction_id,
          ticker: stock_ticker,
          price: bought_price,
          timestamp: bought_time,
        })
      })
      return {
        ...state,
        orderList,
      }

    }

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

