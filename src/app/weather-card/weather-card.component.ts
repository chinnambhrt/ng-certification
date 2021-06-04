import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl:'./weather-card.component.html',
  styles: [
  ]
})
export class WeatherCardComponent implements OnInit {

  @Input("zip") zipCode?: any;
  @Input("index") index: number = -1;
  @Input("delete") delete?: any;
  weather?: any = {weather:[{main: ""}],main: ""};
  imageSrc?: string;

  constructor(
    private storage: StorageService,
    private weatherService: WeatherService
    ) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather(this.zipCode).subscribe(response=>{
      this.weather = response;
      let env: string = this.weather.weather[0].main;
      this.imageSrc = this.weatherService.getImageSources()[env];
    },err=>{
      if(404==err.status){
        this.deleteZip();
      }
    });

  }

  deleteZip(){
    this.storage.removeLocation(this.zipCode);
  }

}
