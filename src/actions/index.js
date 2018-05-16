import axios from 'axios';
//exactly like Jquery // axios that is
const API_KEY = '02e948ff7e603a2c3411006e64927d82';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forcast?appid=${API_KEY}`;

// exporting a variable 
export const FETCH_WEATHER = 'FETCH_WEATHER';

//  fetchweather action creators return an object/ must have a type
export function fetchWeather( city ) {

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

 console.log('Request:', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}