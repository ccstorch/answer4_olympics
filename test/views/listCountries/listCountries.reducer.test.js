import assert from "assert";
import { generateCountry } from '../../fixtures/countries.fixtures';
import listCountriesReducer from '../../../app/views/listCountries/listCountries.reducer';

describe('ListCountries Reducer', () => {
  describe('SET_COUNTRIES_LIST', () => {
    it('should return an object with the list of countries', () => {
      const country = generateCountry();
      const countries = [generateCountry()];
      const actionParam = { type: 'SET_COUNTRIES_LIST', payload: [country] };
      const result = listCountriesReducer(null, actionParam);

      assert.deepEqual(result.list, [{ ...country }]);
    });
  });
});
