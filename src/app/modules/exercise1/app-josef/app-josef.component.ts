import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-josef',
  templateUrl: './app-josef.component.html',
  styleUrls: ['./app-josef.component.scss']
})
export class AppJosefComponent implements OnInit, OnChanges, OnDestroy {

  public isToggled: boolean = false;
  @Input() public name: string = 'Nicht vergeben!!!';
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log('Josef OnInit');
  }

  ngOnChanges() {
    console.log('Josef OnChanges');
  }

  ngOnDestroy() {
    console.log('Josef OnDestroy');
  }

  public toggleIf(event: Event): void {
    event.preventDefault();
    this.isToggled = !this.isToggled;
    this.toggle.emit(this.isToggled);
    console.log('toggleIf: ' + this.isToggled);
  }
}
