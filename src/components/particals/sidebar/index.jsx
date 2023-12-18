import React, { useEffect, useState } from "react";
import "./style.scss";
import FilterBox from "../../common/filter";
import DropDown from "../../common/drop";
import BrandBox from "../../common/brand";
import Api from "../../../libs/axios";
const SideBar = () => {
  
  const [category , setCategory] = useState([]);
  const getcategory = async () => {
    try {
      const {data} = await Api.get('products/categories');
      setCategory(data)
    } catch(e) {
      console.log('ddd');
    }
  }
  useEffect (() => {
    getcategory()
  } , [])

  return (
    <>
      <div className="sidebar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FilterBox />
              <DropDown name="کار کرده" id="0" />
              <DropDown name=" دسته بندی" body={category} queryKey="category" />
              <DropDown name=" انتخاب فروشنده" id="2"/>
              <DropDown name=" محدوده قیمت ها " id="3" />
              <BrandBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
