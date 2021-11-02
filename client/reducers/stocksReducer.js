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
   orderList: [],
   transactionList: [],
   stockList: [],
 };
 
 const stocksReducer = (state = initialState, action) => {
   switch (action.type) {
     default:
       return state;
   }
 };
 
 export default stocksReducer;
 