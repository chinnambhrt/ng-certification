import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl:'./weather-forecast.component.html',
  styles: [
  ]
})
export class WeatherForecastComponent implements OnInit {

  forecast: any = {city:'',weather:[{main:''}]};
  images: any;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {

    this.images = this.weatherService.getImageSources();

    let zip = this.route.snapshot.paramMap.get('zip')

    this.titleService.setTitle(`5-Day Forecast - ${zip}`);

    this.weatherService.getWeatherForecast(zip).subscribe(response=>{
        this.forecast = response;
    });
  

  }


  parseDate(long_date: number){
    return new Date(long_date*1000);
  }


  goback(){
    this.router.navigateByUrl("/");
  }

}
