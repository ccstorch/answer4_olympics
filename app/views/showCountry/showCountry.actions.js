import { getCountryByName } from '../../api/countries.api';

export const SET_COUNTRY = 'SET_COUNTRY'
export const setCountry = (data) => ({ type: SET_COUNTRY, payload: data });
export const fetchCountry = (name) => ({ type: SET_COUNTRY, payload: getCountryByName(name) });
