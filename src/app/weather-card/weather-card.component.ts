import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styles: [
  ]
})
export class WeatherCardComponent implements OnInit {

  @Input("zip") zipCode?: any;
  weather?: any = { weather: [{ main: "" }], main: "" };
  imageSrc?: string;

  constructor(
    private storage: StorageService,
    private weatherService: WeatherService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather(this.zipCode).subscribe(response => {
      this.weather = response;
      let env: string = this.weather.weather[0].main;
      this.imageSrc = this.weatherService.getImageSources()[env];
    }, err => {
      if (404 == err.status) {
        this.deleteZip();
      }
    });
  }

  deleteZip() {
    this.storage.removeLocation(this.zipCode);
  }


  showForecast() {
    this.router.navigate([`forecast/${this.zipCode}`]);
  }


}
