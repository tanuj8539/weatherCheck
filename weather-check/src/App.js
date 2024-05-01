import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import WeatherDetails from "./Components/WeatherDetails";
import Error from "./Components/Error";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    if (city) {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a31b315460df6d4777f67f387f6965e`
      )
        .then((response) => {
          // Check if the request was successful
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          // Parse the response as JSON
          return response.json();
        })
        .then((data) => {
          // Handle the JSON data
          setWeatherData(data);
          setError(null);
        })
        .catch((error) => {
          // Handle any errors that occurred during the fetch
          setError("City not found");
        });
    }
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      {weatherData && !error && <WeatherDetails weatherData={weatherData} />}
      {error && <Error error={error} />}
    </div>
  );
}

export default App;
