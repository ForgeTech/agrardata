import { Component, OnInit } from '@angular/core';
import { FgEvent } from '../../class/fg-event.class';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.scss']
})
export class Exercise3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleAppFlorian( $event: FgEvent ) {
    console.log( 'CHANGE_HANDLER' );
    console.table( $event );
  }

}
