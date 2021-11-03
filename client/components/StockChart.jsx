/**
 * ************************************
 *
 * @module  StockChart
 * @author
 * @date
 * @description Simple presentation component that shows a bold label next to plain text
 *
 * ************************************
 */

import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StockChart = (chartData) => (
  <ResponsiveContainer width={500} height={250}>

    <LineChart width={500} height={250} data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default StockChart;
