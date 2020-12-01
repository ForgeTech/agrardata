import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { interval } from 'rxjs';
import { FgDateTimeService } from './fg-date-time/fg-date-time.service';
import { FgEnvironmentService } from './fg-environment/fg-environment.service';
import { FgEventService } from './fg-event/fg-event.service';


@Injectable({
  providedIn: 'root'
})
export class FlorianService {
  constructor(
    public $log: NGXLogger,
    public $date: FgDateTimeService,
    public $event: FgEventService,
    public $env: FgEnvironmentService
  ) {
    this.$log.warn( 'CONSTRUCTOR florian-service');
  }

}
