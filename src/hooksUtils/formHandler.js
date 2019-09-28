import React, { useState } from "react";

const useSignUpForm = callback => {
  const [disabledState, setDisabledState] = useState(true);

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
  };
  const validatePhoneNumber = phoneNumber => {
    const regex = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/;
    return regex.test(phoneNumber) ? true : false;
  };

  const handleInputChange = event => {
    event.persist();

    validatePhoneNumber(event.target.value)
      ? setDisabledState(false)
      : setDisabledState(true);
  };
  return {
    handleSubmit,
    handleInputChange,
    disabledState
  };
};

export default useSignUpForm;
