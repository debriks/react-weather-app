import React from "react";
import "./App.css";
import "./ForecastHighLow.css";

export default function ForecastHighLow() {
  let temp = {
    min: 14,
    max: 26,
  };
  return (
    <div className="ForecastHighLow">
      {temp.min}° | <strong>{temp.max}°</strong>
    </div>
  );
}
