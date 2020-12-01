import { Component, OnInit, OnDestroy } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { interval, Observable, of, Subscription, Subject, BehaviorSubject } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { FgDateTimeService } from '../../exercise3/services/fg-date-time/fg-date-time.service';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.scss']
})
export class Lesson4Component implements OnInit, OnDestroy {

  public observable$: Observable<number> = of( 1, 2, 3, 4, 5 );
  public interval$: Observable<number> = interval( this.$date.getMsFromTimeString( '1s' ) );
  public interval2$: Observable<number> = interval( this.$date.getMsFromTimeString( '3s' ) );
  protected sub2$$: Subscription;
  protected sub3$$: Subscription;
  public map$: Observable<string>;
  public clicked: number = 0;
  public clicked$: Subject<string> = new BehaviorSubject<string>( 'leer' );

  constructor(
    public $log: NGXLogger,
    public $date: FgDateTimeService
  ) {
    this.map$ = this.interval$.pipe(
      map( value => 'Tick: ' + value ),
      startWith( 'Leer' ),
    );
    const subs1$$ = this.observable$.subscribe(
      value => this.$log.info( 'Observable$: ' , value ),
      error => this.$log.error( 'Observable$: ERROR' ),
      () => this.$log.warn('Observable$: COMPLETE')
    );
    // this.sub2$$ = this.interval$.subscribe(
    //   value => this.$log.error( 'Interval$: ' , value ),
    //   error => this.$log.error( 'Interval$: ERROR' ),
    //   () => this.$log.warn('Interval$: COMPLETE')
    // );

    this.sub3$$ = this.interval2$.subscribe( value =>  this.interval2$.subscribe( value => this.$log.error('LATE SUB: ', value ) ) );


  }

  public handleClick(event: Event ) {
    this.clicked++;
    this.clicked$.next( this.clicked + 'aa' );
  }
  public handleSub(event: Event ) {
    this.$log.warn('SUBSCRIBED');
    this.sub2$$ = this.interval$.subscribe( value => this.$log.warn( 'Dynamic Sub$: ' , value ) );
  }
  public handleUnsub(event: Event ) {
    this.$log.warn('UNSUBSCRIBED');
    this.sub2$$.unsubscribe();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub2$$.unsubscribe();
    this.sub3$$.unsubscribe();
  }

}
