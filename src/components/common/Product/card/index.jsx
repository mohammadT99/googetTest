import React from "react";
import "./style.scss";
import Productimg from "../../../../assets/image/xiaomi-redmi-note-12-pro-speed-6gb-128gb_500x500.jpg";
import { Link } from "react-router-dom";

const CardProduct = ({ product = "سامسونگ مدل EF-QS918", data = {} }) => {
  return (
    <>
      <Link to={`/product/${data.id}`} >
      <div className="col-3">
        <div className="card__product">
          <div className="card__product__img">
            <img src={data?.image || Productimg} alt="" />
          </div>
          <div className="card__product__title">{data.title}</div>
          <div className="card__product__price">
            <p>
              <span>تومان</span>
              {data.price}
            </p>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};
export default CardProduct;
