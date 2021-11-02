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
   <div className="order">
     <LabeledText label="Ticker" text={ticker} />
     <LabeledText label="Type" text={type} />
     <LabeledText label="Price" text={price} />
     <LabeledText label="Executed" text={timestamp} />
   </div>
 );
 
 export default Transaction;