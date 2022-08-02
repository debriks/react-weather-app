import React from "react";
import axios from "axios";
import ForecastHighLow from "./ForecastHighLow";
import "./App.css";
import WeatherIcon from "./02d.png";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  const apiKey = "fd4ffa3dde63cf28819767f2d6c16744";

  let days = {
    day1: "FRI",
    day2: "SAT",
    day3: "SUN",
    day4: "MON",
  };
  return (
    <div className="WeatherForecast d-flex flex-row justify-content-between">
      <div className="d-flex flex-column">
        <p> {days.day1} </p>
        <div className="ForecastIcon">
          <img src={WeatherIcon} width="25px" alt="weather-icon" />
        </div>
        <ForecastHighLow />
      </div>
      <div className="d-flex flex-column">
        <p> {days.day2} </p>
        <div className="ForecastIcon">
          <img src={WeatherIcon} width="25px" alt="weather-icon" />
        </div>
        <ForecastHighLow />
      </div>
      <div className="d-flex flex-column">
        <p> {days.day3} </p>
        <div className="ForecastIcon">
          <img src={WeatherIcon} width="25px" alt="weather-icon" />
        </div>
        <ForecastHighLow />
      </div>
      <div className="d-flex flex-column">
        <p> {days.day4} </p>
        <div className="ForecastIcon">
          <img src={WeatherIcon} width="25px" alt="weather-icon" />
        </div>
        <ForecastHighLow />
      </div>
    </div>
  );
}
