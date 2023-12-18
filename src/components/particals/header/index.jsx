import React from "react";
import "./style.scss";
import HeaderTop from "./header-top";
import HeaderButtom from "./header-buttom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <HeaderTop />
          <HeaderButtom />
        </div>
      </div>
    </>
  );
};

export default Header;
