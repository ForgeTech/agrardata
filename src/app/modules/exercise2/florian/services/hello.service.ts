import { Injectable } from '@angular/core';
import { Greeter } from '../../interfaces/greeter';

@Injectable({
  providedIn: 'root'
})
export class HelloService implements Greeter {
  public counter: number = 0;
  constructor() { }

  greet( name: string ) {
    console.log( `HELLO ${ name }!` );
  }
  count( event: Event = null) {
    this.counter++;
    console.log( `Clicked: `, this.counter );
  }
}
