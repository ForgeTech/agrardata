import { Injectable } from '@angular/core';
import { Greeter } from '../../interfaces/greeter';

@Injectable({
  providedIn: 'root'
})
export class SerwasService implements Greeter {

  constructor() { }

  greet( name: string ) {
    console.log( 'SERWAS ', name, '!');
  }
}
