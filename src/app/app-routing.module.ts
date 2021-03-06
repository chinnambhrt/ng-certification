import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsInStorageGuard } from './guards/is-in-storage.guard';
import { HomeComponent } from './home/home.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'forecast/:zip',
    component: WeatherForecastComponent,
    pathMatch: 'full',
    canActivate: [IsInStorageGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
