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
 import * as actions from '../actions/actions';

 const mapStateToProps = () => {

 };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const OrdersContainer = () => (
  <div className="orders">
    <h2>Orders</h2>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);