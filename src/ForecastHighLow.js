import React from "react";
import axios from "axios";
import "./App.css";
import "./ForecastHighLow.css";

export default function ForecastHighLow() {
  const apiKey = "fd4ffa3dde63cf28819767f2d6c16744";

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
