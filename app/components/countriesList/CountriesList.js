import React from 'react';
import CountryHeadline from '../countryHeadline/CountryHeadline';
import Link from '../link/Link';

const CountriesList = ({ countries }) => {
  const countriesItemsDOM = countries.map((item) => (
    <li key={item.name}>
      <Link path={`/country/${item.name}`}>
        <CountryHeadline country={item} />
      </Link>
    </li>
  ));

  return (
    <ul className='countriesList'>
      {countriesItemsDOM}
    </ul>
  );
}

export default CountriesList;
