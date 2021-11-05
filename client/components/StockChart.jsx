/**
 * ************************************
 *
 * @module  StockChart
 * @author
 * @date
 * @description Simple presentation component that shows chart
 *
 * ************************************
 */

import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const StockChart = (chartData) => (
  <ResponsiveContainer width={'100%'} height={250}>
    <LineChart data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" angle={0} tick={false}/>
      <YAxis type="number" domain={['auto', 'auto']}/>
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default StockChart;
