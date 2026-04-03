import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import { fetchWeather } from "./services/api";
import "./styles/Weather.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (error) {
      alert("City not found!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>🌦 Weather application</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;


