/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

 import { combineReducers } from 'redux';
 import stocksReducer from './stocksReducer';
 
 export default combineReducers({
   stocks: stocksReducer,
 });