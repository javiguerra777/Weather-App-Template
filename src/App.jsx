import {useState, useEffect } from 'react';
import Weather from './components/weather';
import './App.css';
import { getData } from './services/WeatherService';
import Search  from './components/Search';

function App() {
  const [userInput, setUserInput] = useState('');
  const [city, setCity] = useState(userInput);
  const [weatherData, setWeatherData] = useState({});
  
  const resetData= () => {
    setWeatherData({});
  }

  useEffect(() => {
    const fetchData = async () => {
      const cData = await getData(city);
      if(cData){
        setWeatherData(cData);
      }
    }
    if(city){
      fetchData();
    }
  }, [city]);

  return (
    <div className="App">
      <div className={weatherData.main?.temp < 60 ? "App cold" : "App"}>
        <header className="App-header">
          <h1> Weather Or Not App</h1>
          {(Object.keys(weatherData).length !== 0) ? <Weather data={weatherData} resetData= {resetData} /> : <Search userInput={userInput} setUserInput={setUserInput} setCity={setCity} /> }
        </header>
      </div>  
    </div>
  );
}

export default App
