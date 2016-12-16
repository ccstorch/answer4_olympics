import assert from 'assert';
import { generateCountry } from '../fixtures/countries.fixtures';
import { generateMedalist } from '../fixtures/medalists.fixtures';
import { getSortedCountriesByMedals, compareTwoCountriesForSort } from '../../app/helpers/countries.sort';

describe('Countries Sort', () => {
  describe('getSortedCountriesByMedals()', () => {
    const usa = generateCountry({ name: 'USA', total: 3 });
    const eth = generateCountry({ name: 'ETH', total: 1 });
    const ken = generateCountry({ name: 'KEN', total: 2 });
    const countries = [eth, usa, ken];
    const sortedCountries = getSortedCountriesByMedals(countries);

    it('should return a new array', () => {
      assert.notEqual(countries, sortedCountries);
    });

    it('should return an array with USA on top', () => {
      assert.equal(sortedCountries[0].name, usa.name);
    });

    it('should return an array with ETH on bottom', () => {
      assert.equal(sortedCountries[sortedCountries.length - 1].name, eth.name);
    });

    it('should add a ranking value for each item', () => {
      assert.equal(sortedCountries[0].ranking, 1);
      assert.equal(sortedCountries[1].ranking, 2);
      assert.equal(sortedCountries[2].ranking, 3);
    });
  });

  describe('compareTwoCountriesForSort()', () => {
    it('should return < 0 for country A with more total medals then B', () => {
      const countryA = generateCountry({ name: 'USA', total: 4, gold: 2, silver: 2, bronze: 0 });
      const countryB = generateCountry({ name: 'JPN', total: 3, gold: 2, silver: 1 , bronze: 0 });
      assert(compareTwoCountriesForSort(countryA, countryB) < 0);
    });

    it('should return < 0 for country A and B with the same total medals count but A has more gold medals', () => {
      const countryA = generateCountry({ name: 'USA', total: 3, gold: 2, silver: 1, bronze: 0 });
      const countryB = generateCountry({ name: 'JPN', total: 3, gold: 1, silver: 2 , bronze: 0 });
      assert(compareTwoCountriesForSort(countryA, countryB) < 0);
    });

    it('should return < 0 for country A and B with the same total and gold medals count but A has more silver medals', () => {
      const countryA = generateCountry({ name: 'USA', total: 4, gold: 2, silver: 2, bronze: 0 });
      const countryB = generateCountry({ name: 'JPN', total: 4, gold: 2, silver: 1 , bronze: 1 });
      assert(compareTwoCountriesForSort(countryA, countryB) < 0);
    });

    it('should return > 0 for country B with more total medals then A', () => {
      const countryA = generateCountry({ name: 'JPN', total: 3, gold: 2, silver: 1 , bronze: 0 });
      const countryB = generateCountry({ name: 'USA', total: 4, gold: 2, silver: 2, bronze: 0 });
      assert(compareTwoCountriesForSort(countryA, countryB) > 0);
    });

    it('should return > 0 for country A and B with the same total medals count but B has more gold medals', () => {
      const countryA = generateCountry({ name: 'JPN', total: 3, gold: 1, silver: 2 , bronze: 0 });
      const countryB = generateCountry({ name: 'USA', total: 3, gold: 2, silver: 1, bronze: 0 });
      assert(compareTwoCountriesForSort(countryA, countryB) > 0);
    });

    it('should return > 0 for country A and B with the same total and gold medals count but B has more silver medals', () => {
      const countryA = generateCountry({ name: 'JPN', total: 4, gold: 2, silver: 1 , bronze: 1 });
      const countryB = generateCountry({ name: 'USA', total: 4, gold: 2, silver: 2, bronze: 0 });
      assert(compareTwoCountriesForSort(countryA, countryB) > 0);
    });

    it('should return 0 if country A and B has the same amount of in all medals', () => {
      const countryA = generateCountry({ name: 'USA', total: 4, gold: 2, silver: 2, bronze: 0 });
      const countryB = generateCountry({ name: 'JPN', total: 4, gold: 2, silver: 2 , bronze: 0 });
      assert(compareTwoCountriesForSort(countryA, countryB) === 0);
    });
  });
});
