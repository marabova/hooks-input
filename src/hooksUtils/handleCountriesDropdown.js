import React, { useState } from "react";
import countriesData from "./localesData";
export const defaultPrefix = "44";
export const defaultFlagPrefix = "uk";

const CountriesList = callback => {
  const [countryPrefix, setCountryPrefix] = useState(defaultPrefix);
  const [flagPrefix, setFlagPrefix] = useState(defaultFlagPrefix);
  const [countries, setCountries] = useState(countriesData);

  const handleCountryPrefix = event => {
    event.persist();

    const target = event.target;

    setFlagPrefix(target.dataset.flag);
    setCountryPrefix(target.value);
  };

  const handleCountryFilter = event => {
    event.persist();
    const filteredCountries = countriesData.filter(country => {
      if (event.target.value) {
        return (
          country.label
            .toLowerCase()
            .search(event.target.value.toLowerCase()) !== -1
        );
      }
      return country;
    });
    setCountries(filteredCountries);
  };

  const handleInputFocus = component => {
    if (component) {
      component.focus();
    }
  };

  return {
    handleCountryPrefix,
    handleCountryFilter,
    handleInputFocus,
    countryPrefix,
    flagPrefix,
    countries
  };
};

export default CountriesList;
