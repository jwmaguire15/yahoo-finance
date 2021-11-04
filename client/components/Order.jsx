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
   ticker,
   price,
   timestamp,
 }) => (
   <div className="order">
     <span>
      <text>{ticker}</text>
      <text>{price}</text>
      <text>{timestamp.slice(0,7)}</text>
     </span>
   </div>
 );
 
 export default Order;
 