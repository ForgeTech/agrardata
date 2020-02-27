import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';
import { Shared } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class SharedService2Service implements Shared {

  constructor() {
    console.log( 'SharedService2 created');
  }

  public test( name: string ): void {
    console.log( 'SharedService2', name );
  }
}
