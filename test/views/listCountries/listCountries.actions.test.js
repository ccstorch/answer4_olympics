import assert from "assert";
import { generateCountry } from '../../fixtures/countries.fixtures';
import { setCountriesList, fetchCountriesList } from '../../../app/views/listCountries/listCountries.actions';

describe('ListCountries Actions', () => {
  describe('setCountriesList()', () => {
    const countries = [ generateCountry() ];
    const result = setCountriesList(countries);

    it('should return an object with the countries in the payload attribute', () => {
      assert.deepEqual(result.payload, countries);
    });

    it('should return an object with type "SET_COUNTRIES_LIST"', () => {
      assert.equal(result.type, 'SET_COUNTRIES_LIST');
    });
  });

  describe('fetchCountriesList()', () => {
    const result = fetchCountriesList();

    it('should return an object with type "SET_COUNTRIES_LIST"', () => {
      assert.equal(result.type, 'SET_COUNTRIES_LIST');
    });
  });
});
