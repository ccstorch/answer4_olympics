import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import listCountries from './views/listCountries/listCountries.reducer';
import showCountry from './views/showCountry/showCountry.reducer';

export const reducers = combineReducers({
  routing: routerReducer,
  listCountries,
  showCountry
});
