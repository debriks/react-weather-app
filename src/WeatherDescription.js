import React from "react";
import ExtraDatas from "./ExtraDatas";
import "./App.css";
import "./WeatherDescription.css";

export default function WeatherDescription() {
  let weatherDescription = "Clear and Sunny";
  return (
    <div className="d-flex flex-column" id="weather-description">
      <div className="WeatherDescription d-flex flex-start">
        {weatherDescription}
      </div>
      <ExtraDatas />
    </div>
  );
}
