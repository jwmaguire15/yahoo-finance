/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

 import React from 'react';
 import { connect } from 'react-redux';
//  import TotalsDisplay from '../components/TotalsDisplay';
//  import MarketsContainer from './MarketsContainer';
 import * as actions from '../actions/actions';
import OrdersContainer from './OrdersContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchContainer from './SearchContainer';
import TransactionsContainer from './TransactionsContainer';
 
 const mapStateToProps = () => ({
   
 })

 const mapDispatchToProps = () => ({

 })

 const MainContainer = () => (
   <div className="container">
     <div className="outerBox">
       <h1 className="header">Stock Portfolio Management</h1>
       <OrdersContainer></OrdersContainer>
       <SearchContainer></SearchContainer>
       <TransactionsContainer></TransactionsContainer>
       <PortfolioContainer></PortfolioContainer>
     </div>
   </div>
 )

 export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);