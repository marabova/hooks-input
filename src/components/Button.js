import React from "react";

const Button = props => {
  const { disabled, buttonText, className, type } = props;
  return (
    <button type={type} disabled={disabled} className={className}>
      {buttonText}
    </button>
  );
};
export default Button;
