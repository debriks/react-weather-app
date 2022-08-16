import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecastDay.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast d-flex flex-row justify-content-between">
        {forecast.map(function(dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="d-flex flex-column" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    const apiKey = "fd4ffa3dde63cf28819767f2d6c16744";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
