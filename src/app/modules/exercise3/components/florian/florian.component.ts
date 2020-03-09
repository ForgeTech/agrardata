import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FlorianService } from '../../services/florian.service';
import { FgEvent } from '../../class/fg-event.class';

@Component({
  selector: 'app-florian',
  templateUrl: './florian.component.html',
  styleUrls: ['./florian.component.scss']
})
export class FlorianComponent implements OnChanges {
  @Input( 'head' ) public head: string = "";
  @Input( 'desc' ) public desc: string = "";
  @Output( 'changes' ) public changes: EventEmitter<FgEvent> = new EventEmitter<FgEvent>();
  // CONSTRUCTOR
  constructor(
    public $service: FlorianService
  ) {
    this.$service.$log.warn( 'CONSTRUCTOR florian-component' );
  }
  // Implementation of OnChanges-Iterface
  ngOnChanges( changes: SimpleChanges ) {
    let event: FgEvent = new FgEvent( 'Florian-Changes', this, changes);
    // Emit event-object on Event-service
    this.$service.$event.emit( event );
    // Emit event-object via Component-Output/EventEmitter
    this.changes.emit( event );
  }

}
