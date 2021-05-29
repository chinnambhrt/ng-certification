import { Injectable } from '@angular/core';
import { ZipLocation } from '../zip-location.model';
import { APP_ID } from '../app.module'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  locations: ZipLocation[] = [];

  constructor() {
    
    let locs = window.localStorage.getItem(APP_ID);
    
    if(locs!=null || locs==""){
      this.locations = JSON.parse(locs);
    }

  }

  addLocation(loc: ZipLocation) {
    
    if(location!=null){
      this.locations.push(loc);
      this.saveLocationData();
    }

  }

  getLocations(): any{
    return this.locations;
  }

  removeLocation(index: number): boolean{
    const success =  (this.locations.splice(index,1)!=null);
    if(success) this.saveLocationData();
    return success;
    // return (delete this.locations[index]);
  }


  saveLocationData(){
    window.localStorage.setItem(APP_ID,JSON.stringify(this.locations));
  }


}



