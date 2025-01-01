import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { DashModule } from '../dash/dash.module';
import { TradesModule } from '../trades/trades.module';
import { HistoryPageModule } from '../history/history.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    DashModule,
    TradesModule,
    HistoryPageModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
