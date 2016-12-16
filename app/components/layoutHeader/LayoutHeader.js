import React from 'react';

const LayoutHeader = ({ title, subtitle }) => (
  <div className='layoutHeader'>
    <h1 className='title'>{title}</h1>
    {subtitle ? <p className='subtitle'>{subtitle}</p> : false}
  </div>
);

export default LayoutHeader;
