import React from "react";
import axios from "axios";
import "./App.css";
import "./CurrentCityWeather.css";
import WeatherIcon from "./01d.png";

export default function CurrentCityWeather() {
  const apiKey = "fd4ffa3dde63cf28819767f2d6c16744";

  let city = "London";
  return (
    <div className="CurrentCityWeather d-flex flex-column justify-content-center">
      <div className="CityName"></div>
      <div className="CurrentWeather d-flex justify-content-center">
        <img src={WeatherIcon} width="270" alt="weather-icon" />
      </div>
      <div className="CurrentTemperature d-flex flex-row justify-content-between">
        <div className="DayTemp">°</div>
        <div className="celsiusFahrenheit">
          <button className="active">°C</button>
          <button> | °F</button>
        </div>
      </div>
    </div>
  );
}
