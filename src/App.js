import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox/SearchBox';
import getLatandLong from './assest/latAndlong';
import Weather from './Weather/Weather';

const App = () => {
  const [city, setCity] = useState('');
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [cityName, setCityName] = useState('');

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
 


  return (
    <div>
      <h1>Weather App</h1>
      <SearchBox city={city} setCity={setCity} />
      <Weather lat={lat} long={long} cityName={cityName}/>
    </div>
  );
};

export default App;
