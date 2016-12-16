const COUNTRY_OBJECT_STRUCTURE = { name: '', gold: 0, silver: 0, bronze: 0, total: 0 };

export const groupMedalistsByCountry = (medalists) => {
  // Object to group medalists by countries
  const countriesMap = {};

  medalists.forEach((medalist) => {
    // Get the medalist country
    const { country } = medalist;
    // Search for the country data in the map or set a default value
    const countryData = countriesMap[country] || { ...COUNTRY_OBJECT_STRUCTURE, name: country };
    // Format tha country data with the new medalist
    formatCountryStatisticsForMedalist(countryData, medalist);
    // Set the new data object to the countries map
    countriesMap[country] = countryData;
  });
  // Get only the values of the map object
  return Object.values(countriesMap);
}

export const formatCountryStatisticsForMedalist = (countryData, medalist) => {
  // Get all the registered medalists for the country or set a default value
  const medalists = countryData.medalists || [];
  // Add the new medalists to the array
  countryData.medalists = [...medalists, { ...medalist }];
  // Add medal to count
  countryData[medalist.medal.toLowerCase()]++;
  countryData.total++;
}
