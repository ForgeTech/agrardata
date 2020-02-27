import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../service/shared-service.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  constructor(
    public sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.sharedService.test('test 2');
  }

}
