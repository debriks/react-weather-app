import React from "react";
import "./App.css";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast d-flex flex-row justify-content-between">
      <div className="d-flex flex-column">
        <p> MON </p>
        <div className="ForecastIcon">
          <WeatherIcon code="01d" />
        </div>
        <div className="ForecastHighLow">
          14° | <strong>26°</strong>
        </div>
      </div>
      <div className="d-flex flex-column">
        <p> TUE </p>
        <div className="ForecastIcon">
          <WeatherIcon code="02d" />
        </div>
        <div className="ForecastHighLow">
          14° | <strong>26°</strong>
        </div>
      </div>
      <div className="d-flex flex-column">
        <p> WED </p>
        <div className="ForecastIcon">
          <WeatherIcon code="02d" />
        </div>
        <div className="ForecastHighLow">
          14° | <strong>26°</strong>
        </div>
      </div>
      <div className="d-flex flex-column">
        <p> THU </p>
        <div className="ForecastIcon">
          <WeatherIcon code="02d" />
        </div>
        <div className="ForecastHighLow">
          14° | <strong>26°</strong>
        </div>
      </div>
    </div>
  );
}
