import { Injectable } from '@angular/core';
import { Greeter } from '../../interfaces/greeter';

@Injectable({
  providedIn: 'root'
})
export class SerwasService implements Greeter {
  protected counter: number = 0;
  constructor() { }

  greet( name: string ) {
    console.log( 'SERWAS ', name, '!');
  }

  count( event: Event ) {
    this.counter++;
    console.log( `Clicked: `, this.counter );
  }
}
