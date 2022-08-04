import React from "react";
import "./WeatherIcon.css";
import ClearSky from "./images/ClearSky.svg";
import ClearNightSky from "./images/ClearNightSky.svg";
import FewCloudsDay from "./images/FewCloudsDay.svg";
import FewCloudsNight from "./images/FewCloudsNight.svg";
import ScatteredCloudsDay from "./images/ScatteredCloudsDay.svg";
import ScatteredCloudsNight from "./images/ScatteredCloudsNight.svg";
import BrokenCloudsDay from "./images/BrokenCloudsDay.svg";
import BrokenCloudsNight from "./images/BrokenCloudsNight.svg";
import ShowerRainDay from "./images/ShowerRainDay.svg";
import ShowerRainNight from "./images/ShowerRainNight.svg";
import RainDay from "./images/RainDay.svg";
import RainNight from "./images/RainNight.svg";
import ThunderStormDay from "./images/ThunderStormDay.svg";
import ThunderStormNight from "./images/ThunderStormNight.svg";
import SnowDay from "./images/SnowDay.svg";
import SnowNight from "./images/SnowNight.svg";
import MistDay from "./images/MistDay.svg";
import MistNight from "./images/MistNight.svg";

export default function CurrentWeatherIcon({ code, alt }) {
  const codeMapping = {
    "01d": ClearSky,
    "01n": ClearNightSky,
    "02d": FewCloudsDay,
    "02n": FewCloudsNight,
    "03d": ScatteredCloudsDay,
    "03n": ScatteredCloudsNight,
    "04d": BrokenCloudsDay,
    "04n": BrokenCloudsNight,
    "09d": ShowerRainDay,
    "09n": ShowerRainNight,
    "10d": RainDay,
    "10n": RainNight,
    "11d": ThunderStormDay,
    "11n": ThunderStormNight,
    "13d": SnowDay,
    "13n": SnowNight,
    "50d": MistDay,
    "50n": MistNight,
  };

  return <img className="Icon" src={codeMapping[code]} alt={alt} />;
}
