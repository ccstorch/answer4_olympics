import { getRandomNumber, getRandomItemInArray } from './helpers';
import { COUNTRIES_NAMES } from './countries.fixtures';

const ATHLETES = ['KOGO, Micah', 'BEKELE, Kenenisa', 'FLANAGAN, Shalane', 'DIBABA, Tirunesh'];
const SEX = ['Men', 'Women'];
const EVENTS = ['1000m', '100m', '200m', '4x100m relay'];
const MEDALS = ['Gold', 'Silver', 'Bronze'];

export const generateMedalist = (values = {}) => {
  const athlete = getRandomItemInArray(ATHLETES);
  const country = getRandomItemInArray(COUNTRIES_NAMES);
  const sex = getRandomItemInArray(SEX);
  const event = getRandomItemInArray(EVENTS);
  const medal = getRandomItemInArray(MEDALS);

  return { athlete, country, sex, event, medal, ...values };
}
