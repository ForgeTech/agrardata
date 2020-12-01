import { Component, OnInit } from '@angular/core';
import { sub } from 'date-fns';
import { interval } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { FgEvent } from '../../class/fg-event.class';
import { FgDateTimeService } from '../../services/fg-date-time/fg-date-time.service';
import { FgEventService } from '../../services/fg-event/fg-event.service';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.scss']
})
export class Exercise3Component implements OnInit {
  public headValue: string = "HEADER-0";
  public descValue: string = "DESC-0";

  constructor(
    public $event: FgEventService,
  ) {
    this.$event.event$.subscribe( event$ => {
      console.log( 'EVENT_BRIDGE')
      console.table( event$.data );
    });
  }

  ngOnInit() {
    const interval$ = interval( 1000 );
    const subscribtion$$ =
    interval$.subscribe( tick => {
      this.headValue = `HEADER-${ tick }`;
    });
    const sub2$$ = interval$.pipe(
      delay( 1000 ),
      tap( tick => tick >= 3 ? sub2$$.unsubscribe() : false ),
      // map( tick => tick < 2 ? 'low' : 'high' )
    ).subscribe( tick => {
      this.descValue = `DESC-${ tick }`;
      subscribtion$$.unsubscribe();
      // if( tick >= 3) {
      //   sub2$$.unsubscribe();
      // }
    });
  }

  handleAppFlorian( $event: FgEvent ) {
    console.log( 'CHANGE_HANDLER' );
    console.table( $event.data );
  }

}
