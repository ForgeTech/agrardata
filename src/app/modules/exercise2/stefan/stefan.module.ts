import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StefanRoutingModule } from './stefan-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { HelloService } from './services/hello.service';
import { SerwasService } from './services/serwas.service';


@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    StefanRoutingModule
  ],
  providers: [ { provide: HelloService, useClass: SerwasService } ]
  })
export class StefanModule { }
