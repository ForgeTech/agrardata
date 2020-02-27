import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-agrar',
  templateUrl: './agrar.component.html',
  //template: '<h1>STE</h1>',
  //styles: ['h1{color:red}']
  styleUrls: ['./agrar.component.scss']
})
export class AgrarComponent implements OnInit, OnChanges {
  // Class-Member variables
  public value: number = 10;
  public showIf: boolean = true;
  public birthday = new Date(1988, 3, 15); // April 15, 1988
  @Input() public config: number[] = [ 1, 2, 3 ];
  @Input() public name: string = 'world';
  /** Contains a EventEmitter instance and uses it to publish a components events to their parent-component */
  @Output() switched: EventEmitter<string> = new EventEmitter<string>();

  // Class Constructor
  constructor() {
    console.log('CONSTRUCTOR');
  }
  // Angular Live-Cycle Methode
  ngOnInit() {
    console.log('NG INIT');
  }

  ngOnChanges(changes: SimpleChanges){console.log('ON_CHANGES')};
  // Class-Memeber Methode
  public switchIf( event: Event): void {
    event.preventDefault();
    this.showIf = !this.showIf;
    this.switched.emit( this.name );
  }

}
