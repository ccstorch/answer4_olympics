import {
  SET_COUNTRY,
} from './showCountry.actions';

const defaultState = { country: null };

const showCountryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return { ...state, country: action.payload };

    default:
      return state;
  }
}

export default showCountryReducer;
