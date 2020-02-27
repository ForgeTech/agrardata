import { Injectable } from '@angular/core';
import { Shared } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class SharedService3Service implements Shared {

  constructor() {
    console.log('SharedService3 created');
  }

  public test( name: string ) {
    console.log('SharedService3: ', name );
  }
}
