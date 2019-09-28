import React from "react";
import useSignUpForm from "../hooksUtils/formHandler";
import CountriesDropdown from "./DropdownCountry";

import Button from "./Button";

const Form = () => {
  const { handleInputChange, handleSubmit, disabledState } = useSignUpForm();

  return (
    <form onSubmit={handleSubmit} className="signup">
      <div className="signup__inputs">
        <CountriesDropdown />
        <input
          id="userPhoneInput"
          type="tel"
          onChange={handleInputChange}
          placeholder="Your phone number"
          className="signup__input signup__input--phone"
        />
      </div>
      <p className="signup__input--description text--sm-left">
        Use the one linked to your Monese account
      </p>
      <Button
        disabled={disabledState}
        className="btn btn-signup--form mt-100"
        type="submit"
        buttonText="Next"
      />
    </form>
  );
};

export default Form;
