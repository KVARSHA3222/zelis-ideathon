import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
 
const Graph = () => {
  const [chartType, setChartType] = useState('status');
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:3001/graphs')
      .then(res => {
        setData1(res.data.data1);
        setData2(res.data.data2);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
  const renderStatusChart = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <BarChart width={1100} height={300} data={data1} barSize={100}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 'auto']} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#0092d6" />
        </BarChart>
      </div>
    );
  };
 
  const renderIdeaChart = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <BarChart width={800} height={300} data={data2} barSize={100}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#00a989" />
        </BarChart>
      </div>
    );
  };
 
  const renderChart = () => {
    switch (chartType) {
      case 'status':
        return renderStatusChart();
      case 'idea':
        return renderIdeaChart();
      default:
        return null;
    }
  };
 
  return (
    <div style={{ paddingTop: '100px', textAlign: 'left' }}>
      <b>Graph showing status count and role-wise idea count</b>&nbsp;&nbsp;
      <select onChange={(e) => setChartType(e.target.value)}>
        <option value="status">Bar Chart (Status Count)</option>
        <option value="idea">Bar Chart (Role-wise Idea Count)</option>
      </select>
      <br /><br />
      {renderChart()}
    </div>
  );
}
 
export default Graph;