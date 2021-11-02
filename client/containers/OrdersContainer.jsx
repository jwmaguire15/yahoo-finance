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

const mapStateToProps = ({stocks}) => ({
  orderList: stocks.orderList,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const orderMaker = (el, i) => {
  const {ticker, type, price, timestamp, expiration} = el;
  return <Order ticker={ticker} type={type} price={price} timestamp={timestamp} expiration={expiration} key={i.toString()}/>
};

const OrdersContainer = (props) => (
  <div className="orders">
    <h2 className="header">Orders</h2>
    <div>
      {props.orderList.map((el, i) => orderMaker(el, i))}
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);