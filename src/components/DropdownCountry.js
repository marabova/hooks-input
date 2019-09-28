import React, { useRef } from "react";
import DropdownClicks from "../hooksUtils/handleDropdownClicks";
import CountriesList from "../hooksUtils/handleCountriesDropdown";

const CountriesDropdown = () => {
  const parentElementReference = useRef(null);
  const dropdownReference = useRef(null);
  const [openState, toggleDropdown] = DropdownClicks(
    dropdownReference,
    parentElementReference
  );

  const {
    handleCountryPrefix,
    handleCountryFilter,
    handleInputFocus,
    flagPrefix,
    countryPrefix,
    countries
  } = CountriesList();

  const onClick = () => toggleDropdown();

  return (
    <div className={`signup__countries--wraper ${openState ? "active" : ""} `}>
      <div ref={parentElementReference} onClick={onClick}>
        <span className={`signup__countries--flag ${flagPrefix}`}>
          <span className="signup__countries--prefix">{`+${countryPrefix}`}</span>
        </span>
      </div>

      <ul ref={dropdownReference} className="signup__countries">
        <li className="signup__li">
          <input
            type="text"
            id="filterCountriesList"
            ref={handleInputFocus}
            onChange={handleCountryFilter}
            placeholder="Filter here"
            autoComplete="off"
            className="signup__input signup__input--prefix"
          />
        </li>
        {countries.map(country => (
          <li
            key={country.flag}
            data-flag={country.flag}
            data-validation={country.reGexValidation}
            value={country.value}
            onClick={handleCountryPrefix}
            className={`signup__li--flag flag--${country.flag}`}
          >
            {country.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CountriesDropdown;
