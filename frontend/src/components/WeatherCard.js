import React from "react";
import { motion } from "framer-motion";

const WeatherCard = ({ data }) => {
  return (
    <motion.div
      className="weather-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>{data.name}</h2>
      <h1>{data.main.temp}°C</h1>
      <p>{data.weather[0].main}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} km/h</p>
    </motion.div>
  );
};

export default WeatherCard;