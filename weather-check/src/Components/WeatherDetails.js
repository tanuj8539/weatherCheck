import React from "react";

function WeatherDetails({ weatherData }) {
  const { name, main, wind, weather } = weatherData;
  const { temp, humidity, feels_like } = main;
  const { speed } = wind;
  const { icon, description } = weather[0];

  return (
    <div className="weather-details">
      <h2>Current Weather of {name}</h2>
      <img
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt="weather icon"
        className="weather-icon"
      />
      <h1>{Math.round(temp)}°C</h1>
      <div className="description">{description}</div>
      <div className="other-details-div">
        <div className="other-details">
          Humidity <span className="other-detail-value">{humidity}%</span>
        </div>
        <div className="other-details">
          Wind Speed <span className="other-detail-value">{speed} m/s</span>
        </div>
        <div className="other-details">
          Feels Like{" "}
          <span className="other-detail-value">{Math.round(feels_like)}°C</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
