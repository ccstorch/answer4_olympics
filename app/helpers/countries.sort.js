export const getSortedCountriesByMedals = (countries) => {
  // Creates a new array with the same values
  let newCountries = [...countries];
  // Sort by the total attribute
  newCountries.sort(compareTwoCountriesForSort);
  // Add a ranking value for each item
  return newCountries.map((item, index) => ({ ...item, ranking: index + 1 }));
}

export const compareTwoCountriesForSort = (countryA, countryB) => {
  // Check the total value to sort
  if(countryB.total !== countryA.total) return countryB.total - countryA.total;
  // If the total values are the same, check the gold value to sort
  if(countryB.gold !== countryA.gold) return countryB.gold - countryA.gold;
  // If the gold values are the same, check the silver value to sort
  if(countryB.silver !== countryA.silver) return countryB.silver - countryA.silver;
  // If the silver values are the same, check the bronze value to sort
  return countryB.bronze - countryA.bronze;
}
