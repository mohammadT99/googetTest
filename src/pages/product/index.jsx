import React, { useEffect, useState } from "react";
import "./style.scss";
import Api from "../../libs/axios";
import { useParams, useSearchParams } from "react-router-dom";
import Banner from "../../components/common/banner";

const SingleProductPage = () => {
  const [products, setProducts] = useState([]);
  let { id } = useParams();
  const product = async () => {
    const { data } = await Api.get(`products/${id}`);
    setProducts(data);
  };
  useEffect(() => {
    product();
  }, []);

  return (
    <>
        <Banner name={products.category} />
      <div className="contaner">
        <div className="row">
          <div className="col-12">
            <div className="product__single">
              <div className="product__img">
                <img src={products.image} alt="" />
              </div>
              <div className="product__content">
                <div className="product__content__title">
                  <h1>{products.title}</h1>
                </div>
                <div className="product__content__desc">
                  <p>{products.description}</p>
                </div>
                <div className="product__content__price">
                    <h1> {products.price} $</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProductPage;
