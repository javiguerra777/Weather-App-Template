import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = "08a045b45ccb6f5edb27e266494aad20"; // ← replace

  const getWeather = async () => {
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="app">
      <h1>🌤️ Vivacious Weather</h1>

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {weather && weather.main && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>🌡️ Temp: {weather.main.temp}°F</p>
          <p>☁️ Condition: {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
