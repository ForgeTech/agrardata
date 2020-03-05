import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JosefRoutingModule } from './josef-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { HelloService } from './services/hello.service';
import { SerwasService } from './services/serwas.service';

@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    JosefRoutingModule
  ],
  providers: [
    { provide: HelloService, useClass: SerwasService }
  ]
})

export class JosefModule { }
