import React from "react";
import "./style.scss";
import Header from "../../components/particals/header";
import SideBar from "../../components/particals/sidebar";
import BreadCrumb from "../../components/common/breadcrumb";
import Banner from "../../components/common/banner";

import { Outlet } from "react-router-dom";

const Productlayout = () => {
  return (
    <>
      <Header />
      <div className="container ">
        <div className="row">
          <div className="col-12 d-flex">
              <SideBar />
            <div className="content">
              <BreadCrumb />
              <Outlet />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Productlayout;
