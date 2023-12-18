import React from "react";
import "./style.scss";

const Banner = ({ name = "موبایل" }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 justify-content-center">
          <div className="banner">
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
