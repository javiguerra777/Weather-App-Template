import React from 'react'
import './Weather.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons"
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import {faTemperatureArrowDown} from "@fortawesome/free-solid-svg-icons";
import {faTemperatureArrowUp} from "@fortawesome/free-solid-svg-icons";

const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${month} ${date}, ${year}`
}
const Weather = ( {data, resetData} ) => {
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  //Check temperature and assign an icon
  const tempThreshold = 60; //Define the threshold for cold/hot
  const tempIcon = data.main.temp < tempThreshold ? <FontAwesomeIcon icon={faTemperatureArrowDown} /> : <FontAwesomeIcon icon={faTemperatureArrowUp} />;

 const convertUnix = (timestamp) => {
    const ts = new Date(timestamp * 1000);
    const hh = ts.getHours().toString().padStart(2, '0');
    const mm = ts.getMinutes().toString().padStart(2, '0');
    return `${hh}:${mm}`
  }
return (
   <>
    <div id='top-half'>
        <div id='Temp-D'>
          <p id='temp'>{tempIcon} {Math.trunc(data.main.temp)}{'\u00B0'}F |</p>
          <p id='temp-desc'>{data.weather[0].description}</p>
        </div>
        <div>
          <p id="date">{dateBuilder(new Date())}</p>
        </div>
        <div id='weather-Icon'>
          <img src={iconUrl} alt='Weather Icon' />
        </div>
    </div>
        <div>
          <p id='search-term'>{data.name}, {data.sys.country}</p>
        </div>
    <div id='bottom-half'>
       <div>
        <p id='current'><FontAwesomeIcon icon={faClock} /> Current: {convertUnix(data.dt)}</p>
        <p id='humidity'><FontAwesomeIcon icon={faDroplet} /> Humidity: {data.main.humidity}%</p>
        <p id='wind-speed'><FontAwesomeIcon icon={faWind} /> Wind Speed: {data.wind.speed} mi/hr</p>
       </div>
    </div>
    {/* bonus button */}
    <button className="reset" onClick={resetData}>Reset</button>
  </>
 )
}

export default Weather;
