import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="ForecastDay">
        <p> {day()} </p>
      </div>
      <div className="ForecastIcon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="ForecastHighLow">
        {Math.round(props.data.temp.min)}° |
        <strong> {Math.round(props.data.temp.max)}°</strong>
      </div>
    </div>
  );
}
