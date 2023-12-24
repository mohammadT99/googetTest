import React, { useEffect, useState } from "react";
import "./style.scss";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Popup, Marker } from "react-leaflet";
import { render } from "@testing-library/react";
import { Navigator } from "react-router-dom";

const AboutPage = () => {
  // ========================= states =========== //
  // let location = [51.505 , -0.09]
  const [lautitude, setLatitude] = useState(36.2072189);
  const [longitude, setLongitude] = useState(58.7933588);
  const [location, setLocation] = useState([36.2072189, 58.7933588]);
  const [requestLat , setRequestLat] = useState() ; 
  const [requestLong , setRequestLong] = useState();

  // =================== functions ================ //
  // function Register location automatically
  const handleLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
    setLocation({
      lat: lautitude,
      lng: longitude,
    });
  };

  console.log("lat:", lautitude, "long:", longitude);
  console.log("location:", location);

  // function Registration of location manually
  const handleSubmit = () =>{
    setLocation({
      lat: requestLat,
      lng: requestLong,
    });
  }
  // ================== jsxs ================== //

  return (
    <div className="container map-wrapper">
      <div className=" map">
        <MapContainer center={location} zoom={20} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={location}>
            <Popup>
              مکان شما <br />
            </Popup>
          </Marker>
        </MapContainer>
        <form action="#" onSubmit={handleSubmit} className="form-group mt-3 col-6">
          <label htmlFor="let">تنظیم دستی مکان</label>
          <input
            id="let"
            type="text"
            className="input-group mt-2 rounded-2 px-2"
            placeholder="let :را وارد کنید"
            onChange={(e) => setRequestLat(e.target.value)}
          />
          <input
            id="let"
            type="text"
            className="input-group mt-2 rounded-2 px-2"
            placeholder="long :را وارد کنید"
            onChange={(e) =>setRequestLong( e.target.value)}
          />
          <button type="submit" className="btn btn-outline-primary mt-3">افزودن دستی مکان</button>
        </form>
        <button onClick={handleLocation} className="btn btn-primary mt-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.37584 4.85915C8.65549 3.61971 10.1969 3 12 3C13.8031 3 15.3372 3.61267 16.6023 4.83803C17.8675 6.06339 18.5 7.54929 18.5 9.29577C18.5 10.169 18.2746 11.169 17.8238 12.2958C17.373 13.4225 16.8277 14.4789 16.1879 15.4648C15.5481 16.4507 14.9156 17.3732 14.2903 18.2324C13.665 19.0916 13.1342 19.7746 12.698 20.2817L12 21C11.8255 20.8028 11.5928 20.5423 11.302 20.2183C11.0112 19.8944 10.4877 19.2465 9.73154 18.2746C8.97539 17.3028 8.31376 16.3592 7.74664 15.4437C7.17953 14.5282 6.66331 13.493 6.19799 12.338C5.73266 11.1831 5.5 10.169 5.5 9.29577C5.5 7.54929 6.12527 6.07043 7.37584 4.85915Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 9.5C13 10.0523 12.5523 10.5 12 10.5C11.4477 10.5 11 10.0523 11 9.5C11 8.94772 11.4477 8.5 12 8.5C12.5523 8.5 13 8.94772 13 9.5Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          افزودن مکان
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
