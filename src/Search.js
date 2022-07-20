import React from "react";
import TypeCity from "./TypeCity";
import DateHour from "./DateHour";
import "./Search.css";
import "./App.css";

export default function Search() {
  return (
    <div className="Search d-flex flex-row justify-content-between">
      <form name="search-form" id="search-form">
        <input
          placeholder="Type city"
          autofocus="on"
          autocomplete="off"
          type="search"
          required
        />
        <hr className="rule" />
      </form>
      <DateHour />
    </div>
  );
}
