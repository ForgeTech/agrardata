import { Component, OnInit } from '@angular/core';
import { SerwasService } from '../../services/serwas.service';
import { HelloService } from '../../services/hello.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  constructor(
    public helloService: HelloService
  ) { }

  ngOnInit() {
    this.helloService.greet('Josef');
  }

}
