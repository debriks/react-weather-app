import React, { useState } from "react";
import "./App.css";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecastDay.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.list);
    setLoaded(true);

    console.log(response.data.list);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast d-flex flex-row justify-content-between">
        <div className="d-flex flex-column">
          <WeatherForecastDay data={forecast[0]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "fd4ffa3dde63cf28819767f2d6c16744";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
