import { Injectable } from '@angular/core';
import { Greeter } from '../../interfaces/greeter';

@Injectable({
  providedIn: 'root'
})
export class SerwasService {

  constructor() { }

  greet( name: string) {
    console.log('SERVAS, ' + name + '!');
  }

}
