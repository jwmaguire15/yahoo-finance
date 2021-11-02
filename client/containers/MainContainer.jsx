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
 
 const mapStateToProps = () => {
   
 }

 const mapDispatchToProps = () => {

 }

 const MainContainer = () => (
   <div className="container">
     <div className="outerBox">
       <h1 id="header">Stock Portfolio Management</h1>
     </div>
   </div>
 )

 export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);