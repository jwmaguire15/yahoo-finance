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
   ticker,
   type,
   price,
   timestamp,
 }) => (
  <li className="order">
     
      <text>{ticker}</text>
      <text>{price}</text>
      <text>{price}</text>
      <text>{timestamp.slice(0,7)}</text>
      <text>{price}</text>
     
   </li>
 );
 
 export default Transaction;