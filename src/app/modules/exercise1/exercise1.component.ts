import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component implements OnInit {

  private janein: string;

  constructor() { }

  ngOnInit() {
  }

  /*
  public stefanEX1( event: Event): void {

    event.preventDefault();
    console.log('test stefanEX1');

  }

  public showToggled( event: Event ): void {
    event.preventDefault();
    console.log('showToggleEX1');
  }
*/

  public showName( name: string ): void {
    console.log('showToggleEX1');
    console.log(name);

    let n: number;
    n = name.indexOf('false');
    console.log(n);
    this.janein = 'nein';
    console.log(this.janein);

  }

}
