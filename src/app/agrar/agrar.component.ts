import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agrar',
  templateUrl: './agrar.component.html',
  styleUrls: ['./agrar.component.scss']
})
export class AgrarComponent implements OnInit {

  public value: number = 10;

  constructor() { }

  ngOnInit() {
  }

}
