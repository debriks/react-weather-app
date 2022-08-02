import React from "react";
import axios from "axios";
import CurrentCityWeather from "./CurrentCityWeather";
import WeatherDescription from "./WeatherDescription";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Search d-flex flex-row justify-content-between">
        <form name="search-form" className="type-city-input" id="search-form">
          <input
            placeholder="Type city"
            autofocus="on"
            type="search"
            required
          />
          <hr className="rule" />
        </form>
        <div className="DateHour d-flex flex-column align-items-end" id="date">
          <div className="Date"></div>
          <div className="Hour"></div>
        </div>
      </div>
      <CurrentCityWeather />
      <hr className="rule" />
      <WeatherDescription />
      <hr className="rule" />
      <WeatherForecast />
    </div>
  );
}
