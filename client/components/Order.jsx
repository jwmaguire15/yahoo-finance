/**
 * ************************************
 *
 * @module  Order
 * @author
 * @date
 * @description presentation component that renders a single box for each order
 *
 * ************************************
 */

 import React from 'react';

 const Order = ({
   transaction_id,
   ticker,
   price,
   timestamp,
   sellStock,
 }) => (
   <li className="order">
      <text>{ticker}</text>
      <text>{price}</text>
      <text>{timestamp.slice(0,7)}</text>
      <button id={transaction_id} onClick={e => sellStock(e.target.id)}>Sell</button>
   </li>
 );
 
 export default Order;
 