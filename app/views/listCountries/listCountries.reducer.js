import {
  SET_COUNTRIES_LIST,
} from './listCountries.actions';

const defaultState = { list: [] };

const listCountriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_COUNTRIES_LIST:
      return { ...state, list: action.payload };

    default:
      return state;
  }
}

export default listCountriesReducer;
