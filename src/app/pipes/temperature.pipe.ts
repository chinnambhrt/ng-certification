import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, units: string = "K"): string {

    let result=`${value} ${units}`

    switch(units){
      case "F":{
        result = `${((value-273.15)*(9/5)+32).toPrecision(5)} ${units}`;
        break;
      }
      case "C":{
        result = `${(value-273.15)} ${units}`;
        break;
      }
    }

    return result;

  }

}
