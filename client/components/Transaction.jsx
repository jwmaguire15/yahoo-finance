/**
 * ************************************
 *
 * @module  Transaction
 * @author
 * @date
 * @description presentation component that renders a single box for each transaction
 *
 * ************************************
 */

 import React from 'react';
 import LabeledText from './LabeledText';

 const Transaction = ({
   stock_ticker,
   bought_price,
   sold_price,
   sold_time,
   gain,
 }) => (
  <li className="order">
     
      <text>{stock_ticker}</text>
      <text>{bought_price}</text>
      <text>{sold_price}</text>
      <text>{gain}</text>
      <text>{sold_time.slice(0,7)}</text>
     
   </li>
 );
 
 export default Transaction;