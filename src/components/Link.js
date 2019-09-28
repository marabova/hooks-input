import React from "react";

const Link = props => {
  const { href, title, className, text } = props;
  return (
    <a href={href} className={`${className ? className : ""}`} title={title}>
      {text}
    </a>
  );
};
export default Link;
