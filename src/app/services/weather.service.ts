import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weather_image_map = {
    "Clear":"https://www.angulartraining.com/images/weather/sun.png",
    "Rain":"https://www.angulartraining.com/images/weather/rain.png",
    "Clouds":"https://www.angulartraining.com/images/weather/clouds.png",
    "Snow":"https://www.angulartraining.com/images/weather/snow.png",
  }

  constructor(private http: HttpClient) { }

  getCurrentWeather(zip?: number) {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`;
    return this.http.get<any>(url);
  }

  getWeatherForecast(zip?: any){
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip}&appid=${API_KEY}&cnt=5`;
    return this.http.get<any>(url);
  }

  getImageSources(): { [key:string]:string }{
    return this.weather_image_map;
  }



}

const API_KEY = "5a4b2d457ecbef9eb2a71e480b947604";
