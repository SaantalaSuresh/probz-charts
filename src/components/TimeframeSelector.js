
import React from 'react';
import '../styles/TimeframeSelector.css';

const TimeframeSelector = ({ onSelect, selected }) => {
  return (
    <div className="timeframe-selector">
      <button className={selected === 'daily' ? 'active' : ''} onClick={() => onSelect('daily')}>Daily</button>
      <button className={selected === 'weekly' ? 'active' : ''} onClick={() => onSelect('weekly')}>Weekly</button>
      <button className={selected === 'monthly' ? 'active' : ''} onClick={() => onSelect('monthly')}>Monthly</button>
    </div>
  );
};

export default TimeframeSelector;