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
 import LabeledText from './LabeledText';

 const Order = ({
   ticker,
   type,
   price,
   timestamp,
   expiration,
 }) => (
   <div className="order">
     <LabeledText label="Ticker" text={ticker} />
     <LabeledText label="Type" text={type} />
     <LabeledText label="Price" text={price} />
     <LabeledText label="Submitted" text={timestamp} />
     <LabeledText label="Expiration" text={expiration} />
   </div>
 );
 
 export default Order;
 