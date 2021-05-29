import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { AddZipcodeComponent } from './add-zipcode/add-zipcode.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { HomeComponent } from './home/home.component';
import { StorageService } from './services/storage.service';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TemperaturePipe } from './pipes/temperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    AddZipcodeComponent,
    WeatherForecastComponent,
    HomeComponent,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StorageService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const APP_ID: string = "1fde98eee4954a8d85952902ef0c5abe";
