import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StefanRoutingModule } from './stefan-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { HelloService } from './services/hello.service';


@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    StefanRoutingModule
  ]
  })
export class StefanModule { }
