import React from "react";
import "./FormattedDate.css";
import "./App.css";

export default function FormattedDate(props) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let month = months[props.date.getMonth()];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="DateHour d-flex flex-column align-items-end">
      <div className="Date">
        {day}, {month} {date}
      </div>
      <div className="Hour">
        {hours}:{minutes}
      </div>
    </div>
  );
}
