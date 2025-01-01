import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Config, IonRouterOutlet, ModalController } from '@ionic/angular';
import { TradeFilterPage } from '../trade-filter/trade-filter';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
  styleUrls: ['./../trades/trades.scss'],
})
export class HistoryPage {
  speakers: any[] = [];
  ios: boolean;
  segment = "trades";
  excludeTracks: any = [];

  constructor(public confData: ConferenceData, public config: Config, public modalCtrl: ModalController, public routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.ios = this.config.get("mode") === "ios";
  }

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: TradeFilterPage,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedTracks: this.excludeTracks },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTracks = data;
      // this.updateSchedule();
    }
  }
}
