import React from "react";
import TypeCity from "./TypeCity";
import DateHour from "./DateHour";
import "./Search.css";
import "./App.css";

export default function Search() {
  return (
    <div className="Search d-flex flex-row justify-content-between">
      <TypeCity />
        <hr className="rule" />
      <DateHour />
    </div>
  );
}
