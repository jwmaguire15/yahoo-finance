/**
 * ************************************
 *
 * @module  OrdersContainer
 * @author
 * @date
 * @description component that renders OrdersContainer
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { ProgressPlugin } from 'webpack';
import * as actions from '../actions/actions';
import Order from '../components/Order';

const mapStateToProps = ({ stocks }) => ({
  orderList: stocks.orderList,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const orderMaker = (el, i, sellStock) => {
  const { transaction_id, ticker, price, timestamp } = el;
  return <Order transaction_id ={transaction_id} ticker={ticker} price={price} timestamp={timestamp} sellStock={sellStock} key={i.toString()} />
};

const OrdersContainer = (props) => (
  <div className="orders">
    <h2 className="header">Owned</h2>
    <div className="order">
      <span>
        <strong>Ticker</strong>
        <strong>Price</strong>
        <strong>Time</strong>
        <strong>Sell?</strong>
      </span>
    </div>
    <ul>
      {props.orderList.map((el, i) => orderMaker(el, i, props.sellStock))}
    </ul>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);