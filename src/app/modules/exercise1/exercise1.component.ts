import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component {

  constructor() { }

  public showName( event: { toggled: boolean } ): void {
    if ( event.toggled ) {
      console.log( 'Stefan: ', 'ja' );
    } else {
      console.log( 'Stefan: ', 'nein' );
    }

  }

  public josef( toggled: boolean ): void {
    const templateString = `Josef:
      Toggled ${ toggled }
    `;
    console.log(templateString);
  }
}
