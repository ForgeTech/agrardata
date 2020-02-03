import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-agrar',
  templateUrl: './agrar.component.html',
  styleUrls: ['./agrar.component.scss']
})
export class AgrarComponent implements OnInit {
  // Class-Member variables
  public value: number = 10;
  public showIf: boolean = true;
  public birthday = new Date(1988, 3, 15); // April 15, 1988
  @Input() public config: number[] = [ 1, 2, 3 ];
  @Input() public name: string = 'world';

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
