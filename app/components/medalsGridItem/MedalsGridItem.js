import React from 'react';

const MedalsGridItem = ({ medalist }) => (
  <li className='medalsGridItem'>
    <h4 className='athlete'>{medalist.athlete}</h4>
    <p className='medal'>{medalist.medal} Medal</p>
    <p className='event'>{medalist.event}</p>
  </li>
);

export default MedalsGridItem;
