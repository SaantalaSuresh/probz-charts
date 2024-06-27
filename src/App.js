

import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';
import data from './data/data.json';
import './styles/App.css';

const App = () => {
  const [timeframe, setTimeframe] = useState('daily');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    // Function to filter data based on the selected timeframe
    const filterData = (timeframe) => {
      const filtered = data.map(d => ({
        ...d,
        timestamp: new Date(d.timestamp)
      }));
      
      if (timeframe === 'weekly') {
        return filtered.filter((_, index) => index % 7 === 0);
      } else if (timeframe === 'monthly') {
        return filtered.filter((_, index) => index % 30 === 0);
      }
      return filtered;
    };

    setFilteredData(filterData(timeframe));
  }, [timeframe]);

  const handlePointClick = (dataPoint) => {
    alert(`Clicked point: ${JSON.stringify(dataPoint)}`);
  };

  return (
    <div className="App">
        <h1>React Charting Application</h1>
      <TimeframeSelector onSelect={setTimeframe} selected={timeframe} />
      <Chart data={filteredData} onPointClick={handlePointClick} />
    </div>
  );
};

export default App;   