import assert from 'assert';
import { generateCountry } from '../fixtures/countries.fixtures';
import { generateMedalist } from '../fixtures/medalists.fixtures';
import { groupMedalistsByCountry, formatCountryStatisticsForMedalist } from '../../app/helpers/countries.helpers';

describe('Countries Helpers', () => {
  describe('3x formatCountryStatisticsForMedalist()', () => {
    const jpn = generateCountry({ name: 'JPN', total: 0 });
    formatCountryStatisticsForMedalist(jpn, generateMedalist({ medal: 'Gold' }));
    formatCountryStatisticsForMedalist(jpn, generateMedalist({ medal: 'Gold' }));
    formatCountryStatisticsForMedalist(jpn, generateMedalist({ medal: 'Bronze' }));

    it('should add 3 medalitst', () => {
      assert.equal(jpn.medalists.length, 3);
    });

    it('should add 3 medals in total', () => {
      assert.equal(jpn.total, 3);
    });

    it('should add 2 gold medals', () => {
      assert.equal(jpn.gold, 2);
    });

    it('should add 1 bronze medals', () => {
      assert.equal(jpn.bronze, 1);
    });

    it('should not add any silver medals', () => {
      assert.equal(jpn.silver, 0);
    });
  });

  describe('groupMedalistsByCountry()', () => {
    const medalists = [
      generateMedalist({ country: 'USA' }),
      generateMedalist({ country: 'JPN' }),
      generateMedalist({ country: 'JPN' }),
    ];

    const countries = groupMedalistsByCountry(medalists);

    it('should return an array of grouped medalists by country', () => {
      assert(countries.find((item) => item.name === 'USA'));
      assert(countries.find((item) => item.name === 'JPN'));
      assert.equal(countries.length, 2);
    });
  });
});
