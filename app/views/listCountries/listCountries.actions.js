import { getCountriesList } from '../../api/countries.api';

export const SET_COUNTRIES_LIST = 'SET_COUNTRIES_LIST'
export const setCountriesList = (data) => ({ type: SET_COUNTRIES_LIST, payload: data });
export const fetchCountriesList = () => ({ type: SET_COUNTRIES_LIST, payload: getCountriesList() });
