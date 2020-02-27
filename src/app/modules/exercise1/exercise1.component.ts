import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component implements OnInit {

  public switchedToggled: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log('OnInit');
  }

  public josef(toggle: { toggled: boolean }): void {
    this.switchedToggled = toggle.toggled;
    console.log('josef: ' + this.switchedToggled);
  }
}
