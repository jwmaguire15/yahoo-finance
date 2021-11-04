/**
 * ************************************
 *
 * @module  TransactionsContainer
 * @author
 * @date
 * @description component that renders Search and graph
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Transaction from '../components/Transaction';

const mapStateToProps = ({stocks}) => ({
  transactionList: stocks.transactionList,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const transactionMaker = (el, i) => {
  const { ticker, type, price, timestamp } = el;
  return <Transaction ticker={ticker} type={type} price={price} timestamp={timestamp} key={i.toString()} />
};

const TransactionsContainer = (props) => (
  <div className="transactions">
    <h2 className="header">Sold</h2>
    <div className="order">
      <span>
        <strong>Ticker</strong>
        <strong>Basis</strong>
        <strong>Price</strong>
        <strong>Time</strong>
        <strong>Gain</strong>
      </span>
    </div>
    <ul>
      {props.transactionList.map((el, i) => transactionMaker(el, i))}
    </ul>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer);