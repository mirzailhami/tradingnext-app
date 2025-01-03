import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TradesPage } from './trades';
import { TradeFilterPage } from '../trade-filter/trade-filter';
import { TradesRoutingModule } from './trades-routing.module';
import { TimeAgoPipe } from './moment.pipe';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        TradesRoutingModule
    ],
    declarations: [
        TradesPage,
        TradeFilterPage,
        TimeAgoPipe
    ]
})
export class TradesModule { }
