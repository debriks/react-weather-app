import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo d-flex flex-column">
      <div className="WeatherDescription d-flex flex-start text-capitalize">
        {props.data.description}
      </div>
      <div className="ExtraDatas d-flex flex-row">
        <div className="HighLow">
          Highest <strong>{Math.round(props.data.high)}°</strong> <br />
          Lowest <strong>{Math.round(props.data.low)}°</strong> <br />
        </div>
        <div className="HumidityWind">
          Humidity <strong>{props.data.humidity} %</strong>
          <br />
          Wind <strong>{Math.round(props.data.wind)} km/h </strong>
        </div>
      </div>
    </div>
  );
}
