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
   switch (action.type) {
     case types.UPDATE_SEARCH:
      console.log(searchBar);
      return {
        ...state,
        searchBar: action.payload,
      };
    
     default:
       return state;
   }
 };
 
 export default stocksReducer;
 