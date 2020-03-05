import { Injectable } from '@angular/core';
import { Greeter } from '../../interfaces/greeter';

@Injectable({
  providedIn: 'root'
})
export class SerwasService implements Greeter {

  constructor() { }

  public greet(name: string): void {
    console.log('SERWAS ', name, '!');
  }
}
