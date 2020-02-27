import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../service/shared-service.service';
import { SharedService3Service } from '../../service/shared-service3.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
  providers: [
    { provide: SharedServiceService, useClass: SharedService3Service }
  ],
})
export class Test2Component implements OnInit {

  constructor(
    public sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.sharedService.test('test 2');
  }

}
