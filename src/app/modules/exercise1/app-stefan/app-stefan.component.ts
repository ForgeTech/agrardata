import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-app-stefan',
  templateUrl: './app-stefan.component.html',
  styleUrls: ['./app-stefan.component.scss']
})
export class AppStefanComponent implements OnInit, OnChanges, OnDestroy {

  public blnToggled: boolean = false;
  @Input() public name: string = 'Nicht vergeben';
  @Output() toggle: EventEmitter<{ toggled: boolean }> = new EventEmitter<{ toggled: boolean }>();

  constructor() { }

  ngOnInit() {
    console.log('Stefan OnInit');
  }

  ngOnChanges() {
    console.log('Stefan OnChanges');
  }
  ngOnDestroy() {
    console.log('Stefan OnDestroy');
  }

  public stefan( event: Event): void {

    event.preventDefault();
    this.blnToggled = !this.blnToggled;
    console.log('test stefan');
    this.toggle.emit({ toggled: this.blnToggled });

  }

}
