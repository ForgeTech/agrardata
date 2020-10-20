import { Component, OnInit } from '@angular/core';
import { SerwasService } from '../../services/serwas.service';
import { HelloService } from '../../services/hello.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  providers: [
    // HelloService
    { provide: HelloService, useClass: SerwasService}
  ]
})
export class EntryComponent implements OnInit {

  constructor(
    public $greeter: HelloService
  ) { }

  ngOnInit() {
    this.$greeter.greet('Florian');
  }

}
