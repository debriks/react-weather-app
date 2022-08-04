import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="Container d-flex flex-column">
        <Weather defaultCity="Tokyo" />
        <div className="Footer">
          <small>
            <a
              href="https://github.com/debriks/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            &nbsp; by Deborah Robbiano 2022
          </small>
        </div>
      </div>
    </div>
  );
}

// API Key : fd4ffa3dde63cf28819767f2d6c16744
