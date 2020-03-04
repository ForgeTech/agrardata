import { Injectable } from '@angular/core';
import { Greeter } from '../../interfaces/greeter';

@Injectable({
  providedIn: 'root'
})
export class HelloService implements Greeter {

  constructor() { }

  public greet(name: string): void {
    console.log('HELLO ', name, '!');
  }
}
