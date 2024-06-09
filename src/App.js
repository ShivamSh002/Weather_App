import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox/SearchBox';
import getLatandLong from './assest/latAndlong';
import Weather from './Weather/Weather';
import "./App.css"
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const App = () => {
  const [city, setCity] = useState('');
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [cityName, setCityName] = useState('');
  const[isDark,setISDark] = useState(false)

  useEffect(() => {
    const fetchLatAndLong = async () => {
      if (city) {
        const data = await getLatandLong(city);
        console.log('Fetched Data:', data); 
        if (data && data.length > 0) {
          setLat(data[0].lat);
          setLong(data[0].lon);
          setCityName(data[0].state);
        } else {
          setLat(null);
          setLong(null);
        }
      }
    };

    fetchLatAndLong();
  }, [city]);

  console.log('City:', city);
 
const handleMode = () =>{
  setISDark(!isDark)

}

  return (
    <div className={isDark ? 'dark-mode'  : 'light-mode' }> 
      {isDark ? <CiDark className='light 'style={{fontSize : "62px" ,  color : "white"}} onClick={handleMode}/>  :   <CiLight className='light' style={{fontSize : "62px" , }} onClick={handleMode}/>  }
     
      <h1>Weather App</h1>
      <div className='wrapper'>
      <div className='weatherBox' ><SearchBox city={city} setCity={setCity} />
      <Weather lat={lat} long={long} cityName={cityName}/></div></div>
    </div>
  );
};

export default App;
