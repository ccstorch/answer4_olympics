import medalists from './../../data/medalists-2008.json';
import { groupMedalistsByCountry } from './../helpers/countries.helpers';
import { getSortedCountriesByMedals } from './../helpers/countries.sort';
import { store } from './../store';

// Reads the medalists json file and group them by countries
export const getCountriesList = () => {
  // Group by countries
  const countries = groupMedalistsByCountry(medalists);
  // Sort values by total
  return getSortedCountriesByMedals(countries);
}

// Fin the country by name
export const getCountryByName = (name) => {
  // Get list of countries from the store
  const { list } = store.getState().listCountries;
  // If list is empty fetch the list data
  const countries = !!list && list.length ? list : getCountriesList();
  // Find and return the country by name
  return countries.find((item) => item.name === name);
}
