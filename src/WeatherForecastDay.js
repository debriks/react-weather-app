import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  let minTemp = Math.round(props.data.main.temp_min - 273.15);
  let maxTemp = Math.round(props.data.main.temp_max - 273.15);

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
        {minTemp}° |<strong> {maxTemp}°</strong>
      </div>
    </div>
  );
}
