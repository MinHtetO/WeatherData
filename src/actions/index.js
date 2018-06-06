import { request } from "http";
import axios from 'axios';
import { link } from "fs";

const API_KEY = "eba56fc1ee64a90231051880ed9788d6";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
    
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log("Actions");
    console.log(request);

    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}
