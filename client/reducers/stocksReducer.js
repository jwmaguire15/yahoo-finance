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
  transactionList: [],
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
          transaction_id: transaction_id,
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

    case types.SELL_STOCK: {
      let orderList = state.orderList.slice();
      const transactionList = state.transactionList.slice();
      // {"transaction_id":6,"user_id":1,"stock_name":"Apple Inc.","bought_price":"$151.32","bought_time":"2021-11-04T04:00:00.000Z","sold_price":null,"sold_time":null,"stock_ticker":"aapl"}]
      action.payload.forEach(el => {
        const {transaction_id, stock_ticker, bought_price, sold_price, sold_time} = el;
        orderList = orderList.filter(el => el.transaction_id != transaction_id)
        const gain = `\$${Number.parseFloat(Number(sold_price.slice(1)) - Number(bought_price.slice(1))).toFixed(2)}`;
        console.log(gain)
        transactionList.unshift({
          transaction_id,
          stock_ticker,
          bought_price,
          sold_price,
          sold_time,
          gain,
        })
      })
      return {
        ...state,
        orderList,
        transactionList,
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

