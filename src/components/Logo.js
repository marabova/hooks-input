import React from "react";
import Link from "./Link";
const Logo = () => {
  return (
    <Link
      className="link--logo"
      href="/"
      text={<span>Monese</span>}
      title="Monese"
    />
  );
};
export default Logo;
