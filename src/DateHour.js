import React from "react";
import "./App.css";
import "./DateHour.css";

export default function DateHour() {
  let date = {
    day: "Sun",
    month: "Jul",
    date: 1
  };

  let time = {
    hour: 14,
    min: 36
  };
  return (
    <div className="DateHour d-flex flex-column align-items-end" id="date">
      <div className="Date">
        {" "}
        {date.day}, {date.month} {date.date}{" "}
      </div>
      <div className="Hour">
        {time.hour}:{time.min}
      </div>
    </div>
  );
}
