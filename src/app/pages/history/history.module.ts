import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HistoryPage } from './history';
import { HistoryPageRoutingModule } from './history-routing.module';
import { DurationPipe } from './duration.pipe';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HistoryPageRoutingModule
  ],
  declarations: [HistoryPage, DurationPipe],
})
export class HistoryPageModule {}
