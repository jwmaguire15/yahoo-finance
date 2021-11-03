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
        
      case types.BUY_STOCK: 
        return state;
      // should: 
      // 1. check for valid input from user  
      // 2. create an order at current market price
      // 3. clear stock search bar
      
      case types.SEARCH_STOCK: 
        return {
          ...state,
        }

        default:
          return state;
        }
 };
 
 export default stocksReducer;
 