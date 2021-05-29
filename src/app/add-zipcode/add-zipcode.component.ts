import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {  } from '@angular/forms'
import { StorageService } from '../services/storage.service';
import { ZipLocation } from '../zip-location.model';

@Component({
  selector: 'app-add-zipcode',
  templateUrl: './add-zipcode.component.html',
  styles: [
  ]
})
export class AddZipcodeComponent implements OnInit {

  @Output("zipcodeListener") listener = new EventEmitter<ZipLocation>();

  zipCode?: number;

  constructor(private storage:StorageService) { }

  ngOnInit(): void {
  }

  onChange(event: any){
    const zip = event.target.value;
  }

  addZipLocation(){
   
    if(this.zipCode!=null || this.zipCode==""){
      const loc = new ZipLocation(this.zipCode);
      this.storage.addLocation(loc)
      this.listener.emit(loc);
      this.storage.saveLocationData();
      this.zipCode = undefined;
    }
  }

}
