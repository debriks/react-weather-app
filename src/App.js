import React from "react";
import Search from "./Search";
import CurrentCityWeather from "./CurrentCityWeather";
import CurrentTemperature from "./CurrentTemperature";
import WeatherDescription from "./WeatherDescription";
import WeatherForecast from "./WeatherForecast";
import SmallInfos from "./SmallInfos";
import "./App.css";


export default function App() {
  return (
    <div className="Container d-flex justify-content-center">
      <div className="App d-flex flex-column">
        <Search />
        <CurrentCityWeather />
        <CurrentTemperature />
        <hr class="rule" />
        <WeatherDescription />
        <hr class="rule" />
        <WeatherForecast />
        <SmallInfos />
      </div>
    </div>
  );
}
