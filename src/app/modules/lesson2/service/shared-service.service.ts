import { Injectable } from '@angular/core';
import { Shared } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService implements Shared {

  constructor() {
    console.log( 'SharedService created');
  }

  public test( name: string ): void {
    console.log('SharedService: ', name );
  }
}
