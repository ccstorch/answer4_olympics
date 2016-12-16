import React from 'react';
import NumberCircle from '../numberCircle/NumberCircle';
import Counter from '../counter/Counter';

const CountryHeadline = ({ country }) => (
  <div className='countriesListItem'>
    <div className='titleWrapper'>
      <NumberCircle value={country.ranking} />
      <h2 className='title'>{country.name}</h2>
    </div>
    <div className='medalsWrapper'>
      <Counter label='Gold' value={country.gold} />
      <Counter label='Silver' value={country.silver} />
      <Counter label='Bronze' value={country.bronze} />
    </div>
    <div className='totalWrapper'>
      <Counter label='Total' value={country.total} highlight />
    </div>
  </div>
);


export default CountryHeadline;
