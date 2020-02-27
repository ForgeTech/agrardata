import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../service/shared-service.service';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
})
export class Test1Component implements OnInit {

  constructor(
    public sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.sharedService.test('test 1');
  }

}
