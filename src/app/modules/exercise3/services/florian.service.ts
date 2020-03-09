import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { FgEventService } from './fg-event/fg-event.service';
import { FgEnvironmentService } from './fg-environment/fg-environment.service';
import { FgDateTimeService } from './fg-date-time/fg-date-time.service';

@Injectable({
  providedIn: 'root'
})
export class FlorianService {

  constructor(
    public $log: NGXLogger,
    public $event: FgEventService,
    public $env: FgEnvironmentService,
    public $datetime: FgDateTimeService
  ) {
    this.$log.warn( 'CONSTRUCTOR florian-service');
  }
}
