import assert from "assert";
import { generateCountry } from '../../fixtures/countries.fixtures';
import showCountryReducer from '../../../app/views/showCountry/showCountry.reducer';

describe('ShowCountry Reducer', () => {
  describe('SET_COUNTRY', () => {
    it('should return an object with the country', () => {
      const country = generateCountry();
      const actionParam = { type: 'SET_COUNTRY', payload: country };
      const result = showCountryReducer(null, actionParam);

      assert.deepEqual(result.country, { ...country });
    });
  });
});
