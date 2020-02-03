import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agrar',
  templateUrl: './agrar.component.html',
  styleUrls: ['./agrar.component.scss']
})
export class AgrarComponent implements OnInit {
  // Class-Member variables
  public value: number = 10;
  public showIf: boolean = true;
  // Class Constructor
  constructor() {
    console.log('CONSTRUCTOR');
  }
  // Angular Live-Cycle Methode
  ngOnInit() {
    console.log('NG INIT');
  }
  // Class-Memeber Methode
  public switchIf( event: Event): void {
    event.preventDefault();
    this.showIf = !this.showIf;
  }

}
