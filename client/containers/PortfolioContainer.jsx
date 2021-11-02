/**
 * ************************************
 *
 * @module  PortfolioContainer
 * @author
 * @date
 * @description component that renders PortfolioContainer
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

const PortfolioContainer = () => (
  <div className="portfolio">
    <h2>Your Portfolio</h2>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);