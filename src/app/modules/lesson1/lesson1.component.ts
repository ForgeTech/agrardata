import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timer, interval } from 'rxjs';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss']
})
export class Lesson1Component implements OnInit {
  // Class-Member variables
  public switchedName: { name: string, status: boolean } = { name: 'FRITZ', status: false };
  public showName( switched: {name: string, status: boolean} ): void {
    this.switchedName.name = switched.name;
    this.switchedName.status = switched.status;
  }
  public timer:boolean = true;
  public ngOnInit(): void {
    timer( 500 ).subscribe( tick => {
      console.log('tick');
      this.timer = !this.timer;
    })
  }

}

