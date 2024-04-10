import { Colors } from 'chart.js';
import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Appraised', value: 12 },
  { name: 'not apraised', value: 30 },
  { name: 'Yellow', value: 3 },
];

const COLORS = ['#FF5733', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#f39c12'];

const PieChartComponent = () => {
  return (
    <PieChart width={160} height={160} >
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        fill="#8884d8"
        dataKey="value"
       
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      {/* <Tooltip /> */}
      {/* <Legend /> */}
    </PieChart>
  );
};

export default PieChartComponent;
