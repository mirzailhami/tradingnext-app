import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonAvatar, IonButton, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonModal, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { HistoryPage } from './history';
import { HistoryPageRoutingModule } from './history-routing.module';
import { DurationPipe } from './duration.pipe';
import { IonRangeCalendarComponent } from '@googlproxer/ion-range-calendar';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    IonRangeCalendarComponent,
    HistoryPageRoutingModule
  ],
  declarations: [HistoryPage, DurationPipe]
})
export class HistoryPageModule {}
