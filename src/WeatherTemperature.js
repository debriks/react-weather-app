import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(weatherData) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature d-flex flex-row justify-content-between">
        <div className="DayTemp">{Math.round(weatherData.celsius)}°</div>
        <div className="celsiusFahrenheit">
          <button className="unit active">°C</button>{" "}
          <span className="vertical-rule"></span>
          <button className="unit" onClick={showFahrenheit}>
            °F
          </button>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (weatherData.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature d-flex flex-row justify-content-between">
        <div className="DayTemp">{Math.round(fahrenheit)}°</div>
        <div className="celsiusFahrenheit text-end">
          <p>
            {" "}
            <button className="unit" onClick={showCelsius}>
              °C
            </button>{" "}
          </p>
          <span className="vertical-rule"></span>
          <p>
            {" "}
            <button className="unit active"> °F</button>
          </p>
        </div>
      </div>
    );
  }
}
