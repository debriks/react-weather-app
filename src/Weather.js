import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Search d-flex flex-row justify-content-between">
          <form name="search-form" className="type-city-input" id="search-form">
            <input
              placeholder="Type city"
              autofocus="on"
              type="search"
              required
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
          <div className="CurrentTemperature d-flex flex-row justify-content-between">
            <div className="DayTemp">
              {Math.round(weatherData.temperature)}°
            </div>
            <div className="celsiusFahrenheit">
              <button className="active">°C</button>
              <button> | °F</button>
            </div>
          </div>
        </div>
        <hr className="rule" />
        <div className="d-flex flex-column" id="weather-description">
          <div className="WeatherDescription d-flex flex-start text-capitalize">
            {weatherData.description}
          </div>
          <div className="ExtraDatas d-flex flex-row">
            <div className="HighLow">
              Highest <strong>{Math.round(weatherData.high)}°</strong> <br />
              Lowest <strong>{Math.round(weatherData.low)}°</strong> <br />
            </div>
            <div className="HumidityWind">
              Humidity <strong>{weatherData.humidity} %</strong>
              <br />
              Wind <strong>{Math.round(weatherData.wind)} km/h </strong>
            </div>
          </div>
        </div>
        <hr className="rule" />
        <WeatherForecast />
      </div>
    );
  } else {
    const apiKey = "fd4ffa3dde63cf28819767f2d6c16744";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
