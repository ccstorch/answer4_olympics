import { getRandomNumber, getRandomItemInArray } from './helpers';

export const COUNTRIES_NAMES = ['USA', 'KEN', 'ETH'];

export const generateCountry = (values = {}) => {
  const name = getRandomItemInArray(COUNTRIES_NAMES);
  const total = typeof values.total === 'number' ? values.total : getRandomNumber(15);
  const gold = typeof values.gold === 'number' ? values.gold : getRandomNumber(total);
  const silver = typeof values.silver === 'number' ? values.silver : getRandomNumber(total - gold);
  const bronze = total - gold - silver;
  const medalists = [];

  return { name, total, gold, silver, bronze, medalists, ...values };
}
