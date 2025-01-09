import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DashPage } from './dash';
import { DashPageRoutingModule } from './dash-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MomentPipe } from '../../pipes/moment.pipe';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DashPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [
    DashPage,
    MomentPipe
  ]
})
export class DashModule { }
