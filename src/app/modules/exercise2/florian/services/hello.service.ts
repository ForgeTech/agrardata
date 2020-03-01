import { Injectable } from '@angular/core';
import { Greeter } from '../../interfaces/greeter';

@Injectable({
  providedIn: 'root'
})
export class HelloService implements Greeter {

  constructor() { }

  greet( name: string ) {
    console.log( `HELLO ${ name }!` );
  }
}
