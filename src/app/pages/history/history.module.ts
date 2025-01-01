import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HistoryPage } from './history';
import { HistoryPageRoutingModule } from './history-routing.module';
import { DurationPipe } from './duration.pipe';
import { IonRangeCalendarComponent } from '@googlproxer/ion-range-calendar';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    IonRangeCalendarComponent,
    HistoryPageRoutingModule
  ],
  declarations: [HistoryPage, DurationPipe],
})
export class HistoryPageModule {}
