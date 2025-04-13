import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const resultData = [
  {
    studentId: 'S001',
    studentName: 'Alice Johnson',
    physics: 65,
    chemistry: 70,
    math: 60
  },
  {
    studentId: 'S002',
    studentName: 'Brian Smith',
    physics: 75,
    chemistry: 80,
    math: 78
  },
  {
    studentId: 'S003',
    studentName: 'Chloe Davis',
    physics: 92,
    chemistry: 90,
    math: 95
  }
];

const ResultChart = () => {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer>
        <LineChart data={resultData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="studentName" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="math" stroke="#8884d8" name="Math" />
          <Line type="monotone" dataKey="physics" stroke="#82ca9d" name="Physics" />
          <Line type="monotone" dataKey="chemistry" stroke="#ffc658" name="Chemistry" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultChart;
