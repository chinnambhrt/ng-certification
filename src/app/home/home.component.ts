import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ZipLocation } from '../zip-location.model';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  locations?: ZipLocation[];

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    this.updateLocations();
  }

  zipListener(location: ZipLocation){
    this.updateLocations();
  }

  updateLocations(){
    this.locations = this.storage.getLocations();
  }

  deleteZip(index: number){
    this.storage.removeLocation(index);  
  }

}
