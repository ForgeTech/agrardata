import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlorianRoutingModule } from './florian-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { HelloService } from './services/hello.service';
import { SerwasService } from './services/serwas.service';
import { ParentComponent } from './components/parent/parent.component';


@NgModule({
  declarations: [
    EntryComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    FlorianRoutingModule
  ],
  providers: [
    // { provide: HelloService, useClass: SerwasService }
  ]
})
export class FlorianModule { }
