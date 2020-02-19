import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss']
})
export class Lesson1Component implements OnInit {
  // Class-Member variables
  public switchedName: string = '';
  public showName( name: string ): void {
    this.switchedName = name;
  }

  public ngOnInit(): void {}

}

