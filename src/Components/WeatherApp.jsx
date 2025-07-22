import React, { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      console.log(res);
      setWeather(res.data);
    } catch (err) {
      setError(err.response?.data?.error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center
     bg-blue-100 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow p-4">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-black">🌤️ Weather App</h1>

        <div className="flex gap-2 mb-4 ">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter city"
            className="flex-1 border p-2 rounded dark:text-black"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 cursor-pointer"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {weather && (
          <div className="text-center">
            <h2 className="text-xl font-semibold dark:text-green-600">
              {weather.location.name}, {weather.location.country}
            </h2>
            <p className="text-4xl mt-2 dark:text-green-600">{weather.current.temp_c}°C</p>
            <p className="capitalize text-gray-600 mt-1 dark:text-green-600">
              {weather.current.condition.text}
            </p>
            <img
              src={weather.current.condition.icon}
              alt="weather icon"
              className="mx-auto mt-2"
            />
            <p className="text-sm text-gray-500 dark:text-green-600">
              Humidity: {weather.current.humidity}%
            </p>
            <p className="text-sm text-gray-500 dark:text-green-600">
              Wind: {weather.current.wind_kph} kph
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;