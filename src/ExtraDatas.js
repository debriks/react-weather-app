import React from "react";
import axios from "axios";
import "./App.css";
import "./ExtraDatas.css";

export default function ExtraDatas() {
  const apiKey = "fd4ffa3dde63cf28819767f2d6c16744";

  let extraDatas = {
    high: 35,
    low: 22,
    humidity: 0,
    wind: 4,
  };
  return (
    <div className="ExtraDatas d-flex flex-row">
      <div className="HighLow">
        Highest <strong>{extraDatas.high}°</strong> <br />
        Lowest <strong>{extraDatas.low}°</strong> <br />
      </div>
      <div className="HumidityWind">
        Humidity <strong>{extraDatas.humidity} %</strong>
        <br />
        Wind <strong>{extraDatas.wind} km/h </strong>
      </div>
    </div>
  );
}
