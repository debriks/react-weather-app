import React from "react";
import "./App.css";
import WeatherIcon from "./images/FewCloudsDay.svg";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast d-flex flex-row justify-content-between">
      <div className="d-flex flex-column">
        <p> MON </p>
        <div className="ForecastIcon">
          <img src={WeatherIcon} width="25px" alt="weather-icon" />
        </div>
        <div className="ForecastHighLow">
          14° | <strong>26°</strong>
        </div>
      </div>
      <div className="d-flex flex-column">
        <p> TUE </p>
        <div className="ForecastIcon">
          <img src={WeatherIcon} width="25px" alt="weather-icon" />
        </div>
        <div className="ForecastHighLow">
          14° | <strong>26°</strong>
        </div>
      </div>
      <div className="d-flex flex-column">
        <p> WED </p>
        <div className="ForecastIcon">
          <img src={WeatherIcon} width="25px" alt="weather-icon" />
        </div>
        <div className="ForecastHighLow">
          14° | <strong>26°</strong>
        </div>
      </div>
      <div className="d-flex flex-column">
        <p> THU </p>
        <div className="ForecastIcon">
          <img src={WeatherIcon} width="25px" alt="weather-icon" />
        </div>
        <div className="ForecastHighLow">
          14° | <strong>26°</strong>
        </div>
      </div>
    </div>
  );
}
