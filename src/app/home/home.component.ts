import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StorageService } from '../services/storage.service';
import { ZipLocation } from '../zip-location.model';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  locations?: string[];
  zipCode?: string = "";

  constructor(private storage: StorageService, 
    private titleService: Title
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Weather App.");
    this.updateLocations();
  }

  updateLocations(){
    this.locations = this.storage.getLocations();
  }

  addZipLocation(){ 
    if(5==this.zipCode?.length){
      this.storage.addLocation(this.zipCode);
      this.zipCode = "";
    }
  }

  onkeypress(event: any){
    const code = event.keyCode;
    if(code>=48 && code<=57){
      return true;
    }
    event.preventDefault();
    return false;
  }

}
