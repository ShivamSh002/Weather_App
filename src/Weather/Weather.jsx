import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Weather = ({ lat, long , cityName }) => {
    const[temp,setTemp]=useState(null)
    const[dateTime,setDateTime]=useState(null)
   
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=39abbfec3d1a1e19474631eaf2af7054`
      );
      console.log(res.data.main.temp);
      setTemp(res.data.main.temp);
      
    } catch (error) {
      console.error("Error fetching the data: ", error);
    }
  };

  const getDateAndTime = async (lat,long) => {
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
      setDateTime(res.data.datetime)
    } catch (error) {
      console.error('Error: ', error.response.data);
    }
  };
  
  
  
  useEffect(() => {
    getData();
    getDateAndTime(lat,long);
  }, [lat, long]);



  return (
    <div><div>{dateTime}</div>
    <div>{temp}</div>
    <div>{cityName}</div></div>
  );
};

export default Weather;
