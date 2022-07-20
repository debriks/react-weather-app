import React from "react";
import "./App.css";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  let dayTemp = 32;
  return (
    <div className="CurrentTemperature d-flex flex-row justify-content-between">
      <div className="DayTemp">{dayTemp}°</div>
      <div className="celsiusFahrenheit">
        <button className="active">°C</button>
        <button> | °F</button>
      </div>
    </div>
  );
}
