import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Weather App');
  }
}
