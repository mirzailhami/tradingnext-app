import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DashPage } from './dash';
import { DashPageRoutingModule } from './dash-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DashPageRoutingModule
  ],
  declarations: [
    DashPage
  ]
})
export class DashModule { }
