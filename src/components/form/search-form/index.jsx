import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import "./style.scss";
import { useSearchParams } from "react-router-dom";
import Api from "../../../libs/axios";

const FormSearch = ({ queryKey = "search" }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState([]);

  const addToQuery = (val) => {
    searchParams.set(queryKey, val);
    setSearchParams(searchParams);
    setValue(val);
  };

  useEffect(() => {
    addToQuery(value);
  }, []);

  return (
    <>
      <form action="#" className="form__search">
        <input
          type="text"
          onChange={(val) => addToQuery(val.target.value)}
          value={searchParams.get(queryKey)}
          id="input_search"
          className="input-group"
          placeholder="جستجو بین هزاران فروشنده"
        />
        <span className="icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.9697 16.9697C17.2626 16.6768 17.7374 16.6768 18.0303 16.9697L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L16.9697 18.0303C16.6768 17.7374 16.6768 17.2626 16.9697 16.9697Z"
              fill="#22272F"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75ZM1.25 11C1.25 5.61522 5.61522 1.25 11 1.25C16.3848 1.25 20.75 5.61522 20.75 11C20.75 16.3848 16.3848 20.75 11 20.75C5.61522 20.75 1.25 16.3848 1.25 11Z"
              fill="#22272F"
            />
          </svg>
        </span>
      </form>
    </>
  );
};

export default FormSearch;
