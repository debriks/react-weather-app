import React from "react";
import "./App.css";

export default function TypeCity() {
  return (
    <div className="TypeCity">
      <form name="search-form" className="type-city-input" id="search-form">
        <input placeholder="Type city" autofocus="on" type="search" required />
      </form>
      <hr className="rule" />
    </div>
  );
}
