import { Injectable } from '@angular/core';
import { APP_ID } from '../app.module'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  locations: string[] = [];

  constructor() {
    
    let locs = window.localStorage.getItem(APP_ID);
    
    if(locs!=null || locs==""){
      this.locations = JSON.parse(locs);
    }

  }

  addLocation(loc: string) {
    if(location!=null && !this.hasLocation(loc)){
      this.locations.push(loc);
      this.saveLocationData();
    }
  }

  getLocations(): string[]{
    return this.locations;
  }

  hasLocation(zip: string){
    return this.locations.indexOf(zip)>-1;
  }

  removeLocation(zip: string): boolean{
    const index = this.locations.indexOf(zip);
    const success =  (this.locations.splice(index,1)!=null);
    if(success) this.saveLocationData();
    return success;
    // return (delete this.locations[index]);
  }


  saveLocationData(){
    window.localStorage.setItem(APP_ID,JSON.stringify(this.locations));
  }


}



