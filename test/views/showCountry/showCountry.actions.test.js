import assert from "assert";
import { generateCountry } from '../../fixtures/countries.fixtures';
import { setCountry, fetchCountry } from '../../../app/views/showCountry/showCountry.actions';

describe('ShowCountry Actions', () => {
  describe('setCountry()', () => {
    const country = generateCountry();
    const result = setCountry(country);

    it('should return an object with the country in the payload attribute', () => {
      assert.deepEqual(result.payload, country);
    });

    it('should return an object with type "SET_COUNTRY"', () => {
      assert.equal(result.type, 'SET_COUNTRY');
    });
  });

  describe('fetchCountry()', () => {
    const result = fetchCountry('USA');

    it('should return an object with type "SET_COUNTRY"', () => {
      assert.equal(result.type, 'SET_COUNTRY');
    });
  });
});
