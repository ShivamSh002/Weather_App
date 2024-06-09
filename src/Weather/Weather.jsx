import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sunny from "../assest/Vector.png";
import Clouds from "../assest/Group 1 (1).png";
import PartialCloud from "../assest/Group 1.png";
import Rain from "../assest/Group 2.png";
import "./Weather.css";

const Weather = ({ lat, long, cityName }) => {
  const [temp, setTemp] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const [type, setType] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=39abbfec3d1a1e19474631eaf2af7054`
      );
      console.log("hello", res.data);
      console.log(res.data.main.temp);
      const tempInCelsius = res.data.main.temp - 273.15;
      setTemp(tempInCelsius.toFixed(2)); 
      setType(res.data.weather[0].main);
    } catch (error) {
      console.error("Error fetching the data: ", error);
    }
  };

  const getDateAndTime = async (lat, long) => {
    try {
      const res = await axios.get(
        `https://api.api-ninjas.com/v1/worldtime?lat=${lat}&lon=${long}`,
        {
          headers: {
            'X-Api-Key': 'Dm484qdmGTuH2UVTuOGXwhLhgNBwTRBkxdr4Ai08'
          }
        }
      );
      console.log(res.data);
      setDateTime(res.data.datetime);
    } catch (error) {
      console.error('Error: ', error.response.data);
    }
  };

  const weatherType = (type) => {
    switch(type) {
      case 'Rain' :
        return Rain;
      case 'Clouds':
        return Clouds;
      case 'Clear':
        return Sunny;
      case 'Partly Cloudy':
        return PartialCloud;
      default:
        return Sunny; 
    }
  };

  useEffect(() => {
    getData();
    getDateAndTime(lat, long);
  }, [lat, long]);

  return (
    <div className='tempWrapper'>
      <div className='img'>
        <img src={weatherType(type)} alt={type} width={150} />
      </div>
      <div className='boxWrapper'>
        <div className='box'>
          <p>Date And Time :</p>
          {dateTime}
        </div>
        <div className='box'>
          <p>Temperature :</p>
          {temp}°C
        </div>
        <div className='box'>
          <p>Location :</p>
          {cityName}
        </div>
      </div>
    </div>
  );
};

export default Weather;
