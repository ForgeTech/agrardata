import {
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  Component} from '@angular/core';

@Component({
  selector: 'app-agrar',
  // template: `<h1>template</h1>`,
  // styles: [`h1 { color: red }`],
  templateUrl: './agrar.component.html',
  styleUrls: ['./agrar.component.scss'],

})
export class AgrarComponent implements OnInit, OnChanges, OnDestroy {
  // Class-Member variables
  public value: number = 10;
  public showIf: boolean = true;
  public birthday = new Date(1988, 3, 15); // April 15, 1988
  @Input() public config: number[] = [ 1, 2, 3 ];
  @Input() public name: string = 'world';
  /** Contains a EventEmitter instance and uses it to publish a components events to their parent-component */
  @Output() switched: EventEmitter<{name: string, status: boolean }> = new EventEmitter<{name: string, status: boolean }>();

  // Class Constructor
  constructor() {
    console.log('CONSTRUCTOR');
    this.switched.subscribe( ( test: {name: string, status: boolean } ) => {
      console.log('Subscribtion Fired');
      console.table( test );
    });
  }
  // Angular Live-Cycle Methode OnInit
  ngOnInit() {
    console.log('ON_INIT');
  }
  // Angular Live-Cycle Methode OnChanges
  ngOnChanges( changes: SimpleChanges ) {
    console.log('ON_CHANGES');
    console.table(changes);
  }
  // Angular Live-Cycle Methode OnDestroy
  ngOnDestroy() {
    console.log('ON_DESTROY');
    this.switched.unsubscribe();
  }
  // Class-Memeber Methode
  public switchIf( event: Event): void {
    event.preventDefault();
    this.showIf = !this.showIf;
    this.switched.emit( { name: this.name, status: this.showIf } );
  }

}
