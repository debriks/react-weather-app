import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      hour: "14:36",
      temperature: response.data.main.temp,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      low: response.data.main.temp_min,
      high: response.data.main.temp_max,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "fd4ffa3dde63cf28819767f2d6c16744";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Search d-flex flex-row justify-content-between">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Type city"
              className="form-control"
              onChange={handleCityChange}
            />
            <hr className="rule" />
          </form>
          <div className="FormattedDate">
            <FormattedDate date={weatherData.date} />
          </div>
        </div>
        <div className="CurrentCityWeather d-flex flex-column justify-content-center">
          <div className="CityName">{weatherData.city}</div>
          <div className="WeatherIcon d-flex justify-content-center">
            <WeatherIcon code={weatherData.icon} />
          </div>
          <WeatherTemperature celsius={weatherData.temperature} />
        </div>
        <hr className="rule" />
        <WeatherInfo data={weatherData} />
        <hr className="rule" />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
  }
}
