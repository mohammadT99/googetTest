import axios from "axios";
import Cookies from "js-cookie";
import { json } from "react-router-dom";

const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization : ""
  },
});

// Add a request interceptor
Api.interceptors.request.use(
  function (config) {
    // const {token} = JSON.parse(Cookies.get('user'));
    // console.log('bbee' , token);
    // config.headers.Authorization =`Bearer ${token}`;
    // console.log('pppp' , token);
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    alert("err");
    return Promise.reject(error);
  }
);

// Add a response interceptor
Api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // alert("err when sending request");

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default Api;
