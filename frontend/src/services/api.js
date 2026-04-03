import axios from "axios";

const API_KEY = "YOUR_API_KEY";

export const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  
  const response = await axios.get(url);
  return response.data;
};