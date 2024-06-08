import axios from "axios";

const getLatandLong = async (city) => {

  try {
    const res = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=39abbfec3d1a1e19474631eaf2af7054`
    );
    return(res.data);
  } catch (error) {
    return("Error fetching the data: ", error);
  }
};

export default getLatandLong;
