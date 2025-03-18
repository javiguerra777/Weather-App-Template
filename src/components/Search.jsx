import React from 'react'
import './Search.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({userInput, setUserInput, setCity}) => {
  return (
    <>
      
      <div className='weather'>
         <div className="search-bar">
        <label htmlFor='city-name'>
           <input
           id='city-name'
           name='cityName'
           placeholder='Enter Location'
           value={userInput}
           onChange={(e) => setUserInput(e.target.value)}
         />
        </label>
           <button className="search-btn" onClick={() =>{setCity(userInput)}}> <FontAwesomeIcon icon={faSearch} size="lg" style={{ color: 'black' }} className="SearchIcon" /></button>
        </div>
      </div> 
     
    </>
  )
}

export default Search