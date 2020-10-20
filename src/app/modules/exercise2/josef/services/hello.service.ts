import { Injectable } from '@angular/core';
import { Greeter } from '../../interfaces/greeter';

@Injectable({
  providedIn: 'root'
})
export class HelloService  {

  constructor() { }

  public greet(name: string): void {
    console.log('HELLO ', name, '!');
  }
}
