export function getCountry(allCountries, countryCode) {
  return allCountries.find((country) => country.cca3 === countryCode);
}
