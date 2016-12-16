import React from 'react';

const Counter = ({ value, label, highlight, className }) => {
  let finalClassName = 'counter ' + (className || '');
  if(highlight) finalClassName += ' highlight';

  return (
    <div className={finalClassName}>
      <div className='value'>{value}</div>
      <div className='label'>{label}</div>
    </div>
  );
}

export default Counter;
