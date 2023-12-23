import React from "react";
import "./style.scss";
import Header from "../../components/particals/header";
import SideBar from "../../components/particals/sidebar";
import BreadCrumb from "../../components/common/breadcrumb";
import Banner from "../../components/common/banner";

import {  Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";



const Productlayout = () => {

 const navigate = useNavigate()

  const handlelogout = () => {
    // console.log('kkkk');
    Cookies.remove('user');
    // console.log('kkk', Cookies.get('user'));
    navigate("/")
  }
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
              <button type="button" onClick={handlelogout}>logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Productlayout;
