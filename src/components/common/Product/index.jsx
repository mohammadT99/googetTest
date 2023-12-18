import React, { useEffect } from "react";
import "./style.scss";
import CardProduct from "./card";
import { useState } from "react";
import Api from "../../../libs/axios.js";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsFiltered, setProductsFiltered] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState();

  const getProducts = async () => {
    try {
      setLoading(true);
      let _url = "products";
      if (searchParams.get("category")) {
        _url = "products/category/" + searchParams.get("category");
      }
      const { data } = await Api.get(_url);
      setProducts(data);
      setProductsFiltered(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  
  const Tosearch = () => {
    setValue(searchParams.get("search"));
    if (searchParams.get("search") === "") {
      console.log(value);
      return products;
    } else {
      const searchproduct = products.filter((item) => {
        if (item.title.toLowerCase().includes(searchParams.get("search"))) {
          return item;
        }
      });
      setProductsFiltered(searchproduct);
    }
  };


  useEffect(() => {
    getProducts();
  },[searchParams.get('category')]);

  useEffect(() => {
    Tosearch();
  }, [searchParams]);

  return (
    <>
      <>
        <div className="product__content">
          <div className="row">
            {loading ? (
              <span>loading...</span>
            ) : productsFiltered.length > 0 ? (
              productsFiltered.map((p) => {
                return <CardProduct key={p.id} data={p} />;
              })
            ) : (
              <span>محصولی یافت نشد</span>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default Product;
