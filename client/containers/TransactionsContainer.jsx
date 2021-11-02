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

 const mapStateToProps = () => {

 };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const TransactionsContainer = () => (
  <div className="transactions">
    <h2>Search</h2>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer);