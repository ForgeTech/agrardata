import { Injectable } from '@angular/core';
import { NGXLogger as FgLogService } from 'ngx-logger';
import { Subject, Observable } from 'rxjs';
import { FgEvent } from 'src/app/class/fg-event.class';
/**
 * FgEventService -
 * Service provides an interface to handle and distribute
 * events inside forge-application. It should be used as
 * for main source of inter module/component/service
 * communication
 */
@Injectable({ providedIn: 'root'})
export class FgEventService {
  /**
   * The observable subject used to push events
   * within the angular application
   */
  protected _event$: Subject<FgEvent>;
  get event$(): Observable<FgEvent> {
    return this._event$;
  }
  /**
   * Instance of Forge Log-Service
   */
  protected $log: FgLogService;
  /**
   * Instance of Forge Log-Service
   */
  protected eventsToLog: string[];
  /**
   * Member to hold event-subscriptions
   * Every subscribed event-type is used as object-key
   * exposing an array of objects subscribed to according
   * event
   */
  protected subscribed: [string, ( event: FgEvent ) => void, any ][];
  /**
   * CONSTRUCTOR
   */
  constructor(
    $log: FgLogService
  ) {
    this.$log = $log;
    this.eventsToLog = [];
    this.subscribed = [];
    this._event$ = new Subject<FgEvent>();
  }
  /**
   * Methode to define a set of events that should be logged
   */
  public registerEventsToLog( events: string[] ): string[] {
    this.eventsToLog = events;
    this.$log.debug( 'Events to log:', this.eventsToLog );
    return this.eventsToLog;
  }
  /**
   * TODO: Methode to register an event-handler to a given event
   * @param signature The name of the Event to register, like 'Event_FgComponentBase_onInit
   * @param callback The callback-function to be executed when event is emitted using event-service
   * @param dispatcher ( Optional ) Only listen to event when dispatched by passed object
   * @return Always returns true, exists so subscribe and unsubscribe have same methode-interface
   */
  public subscribe( signature: string, callback: ( event: FgEvent ) => void, dispatcher: any = false ): boolean {
     this.$log.warn( 'Subscribe: ', signature, dispatcher );
     this.subscribed.push( [ signature, callback, dispatcher ] );
     return true;
  }
 /**
  * TODO: Methode to unregister an event-handler to a given event
  * @param signature The name of the Event to register, like 'Event_FgComponentBase_onInit
  * @param callback The callback-function to be executed when event is emitted using event-service
  * @param dispatcher ( Optional ) Only listen to event when dispatched by passed object
  * @return Returns true when subscribtion matching parameters is removed,
  *         false if no matching subscribtion is found
  */
  public unsubscribe( signature: string , callback?: ( event: FgEvent ) => void, dispatcher?: any ): boolean {
     this.$log.warn( 'Unsubscribe: ', signature, callback, dispatcher );
     return true;
  }
  /**
   * TODO: Compare two events
   */
  public compareEvents( event: FgEvent, compareToEvent: FgEvent ): boolean {
    let eventMatching = true;
    if ( event.signature !== compareToEvent.signature) {
      eventMatching = false;
    }
    return eventMatching;
  }
  /**
   * Methode to dispatch events over the event-pipeline
   * @param component
   * @param event
   */
  public emit( event: FgEvent ): void {
    // If emitted event is matching an event inside eventToLog write log
    if ( this.eventsToLog.filter(
      eventToLog => {
        if ( event.signature === eventToLog ) {
          return true;
        } else {
          return false;
        }
      }).length > 0
    ) {
      this.$log.debug( 'Event:', event );
    }
    // Emit event via event-service observable
    this._event$.next( event );
  }
}
