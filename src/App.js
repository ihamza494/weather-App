import React, { useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url="https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=f1e3b77fb3efe8b02e0bdd915567a4fe";

 const searchLocation = (event)=>{
  if(event.key === 'Enter'){
    axios
  .get(url)
  .then((response) => {
    // Handle the API response here
    setData(response.data)
    console.log(response.data);
  })
  .catch((error) => {
    // Handle errors here
    console.log(url);
    console.error(error.message);
  });
  }
 }


  return (
    <div className="app">
      <div className="search">
      <input
      value={location}
      onChange={event=>setLocation(event.target.value)}
      onKeyPress={searchLocation}
      placeholder='Enter Location'
      type="text"
      />
      </div>
    <div className="container">
      <div className="top">
        <div className="location">
          {data.name? <p>{data.name}</p> : null}
        </div>
        <div className="temp">
        {data.main? <h1>{(data.main.temp - 273).toFixed(2)}°C</h1> : null}
            
        </div>
        <div className="description">
        {data.main? <p>{data.weather[0].main}</p> : null}
            
        </div>
      </div>
      {data.name !== undefined && 
      <div className="bottom">
      <div className="feels">
      {data.main? <p className="bold">{(data.main.feels_like - 273).toFixed(2)}°C</p> : null}         
            <p>Feels Like</p>
        </div>
        <div className="humidity">
        {data.main? <p className="bold">{data.main.humidity}%</p> : null}
            
            <p>Humidity</p>
        </div>
        <div className="wind">
        {data.main? <p className="bold">{data.wind.speed} MPH</p> : null}
            
            <p>Wind</p>
        </div>

      </div>
}
    </div>
  
    </div>
  );
}

export default App;
