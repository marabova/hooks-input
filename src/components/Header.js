import React from "react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  return (
    <header>
      <div className="grid grid--container">
        <div className="row row--sm-center">
          <div className="col col--sm-6">
            <Logo />
          </div>
          <div className="col col--sm-6">
            <div className="text--sm-right">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
