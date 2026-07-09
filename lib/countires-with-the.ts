export const countriesWithThe = [
  "United Kingdom",
  "United States",
  "United Arab Emirates",
  "Netherlands",
  "Philippines",
  "Bahamas",
  "Maldives",
  "Gambia",
  "Dominican Republic",
  "Central African Republic",
  "Republic of the Congo",
  "Democratic Republic of the Congo",
];

export function formatCountryWithThe(country: string) {
  return countriesWithThe.includes(country)
    ? `the ${country}`
    : country;
}