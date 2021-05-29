import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'ng-certification';
}


export class Location{
  zipCode?: number;
  constructor(zip: number){
    this.zipCode = zip;
  }
}