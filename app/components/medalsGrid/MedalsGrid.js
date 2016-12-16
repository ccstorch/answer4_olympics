import React from 'react';
import MedalsGridItem from '../medalsGridItem/MedalsGridItem'

const MedalsGrid = ({ medalists }) => {
  const medalistsDOM = medalists.map((item, index) => (
    <MedalsGridItem medalist={item} key={index} />
  ));

  return (
    <ul className='medalsGrid'>
      {medalistsDOM}
    </ul>
  );
};

export default MedalsGrid;
