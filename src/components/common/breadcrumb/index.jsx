import React from "react";
import "./style.scss";
import { Breadcrumb } from "react-bootstrap";

const BreadCrumb = ({ name, path }) => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <Breadcrumb>
              <Breadcrumb.Item href="#"> </Breadcrumb.Item>
              <Breadcrumb.Item href={path}>
                محصولات
              </Breadcrumb.Item>
              <Breadcrumb.Item active>موبایل</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </>
  );
};
export default BreadCrumb;
