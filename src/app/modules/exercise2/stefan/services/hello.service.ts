import { Injectable } from '@angular/core';
import { Greeter } from '../../interfaces/greeter';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

 greet( name: string ) {
   console.log('HELLO, ' + name + '!');
 }

}
