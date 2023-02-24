import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutingModule } from './guides-routing.module';
import { GuidesComponent } from './guides.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    GuidesComponent
  ],
  imports: [
    CommonModule,
    GuidesRoutingModule,
    MaterialModule,
  ]
})
export class GuidesModule { }
