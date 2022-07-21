import React from "react";
import "./App.css";
import "./CurrentCityWeather.css";
import WeatherIcon from "./01d.png";

export default function CurrentCityWeather() {
  let city = "London";
  return (
    <div className="CurrentCityWeather d-flex flex-column justify-content-center">
      <div className="CityName">{city}</div>
      <div className="CurrentWeather d-flex justify-content-center">
        <img src={WeatherIcon} width="270" alt="weatehr-icon" />
      </div>
    </div>
  );
}
