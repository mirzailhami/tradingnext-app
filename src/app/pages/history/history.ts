import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController, Config, IonRouterOutlet, ModalController } from '@ionic/angular';
import { TradeFilterPage } from '../trade-filter/trade-filter';
import { ApiService } from '../../services/api.service';

interface Trade {
  _id: string;
  accountId: string;
  closeTime: string;
  openTime: string;
  profit: number;
  type: string;
  closePrice?: number;
  comment?: string;
  gain?: number;
  marketValue?: number;
  openPrice?: number;
  pips?: number;
  positionId?: string;
}

interface GroupedTrades {
  pips: number;
  date: string;
  trades: Trade[];
}

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
  styleUrls: ['./../trades/trades.scss'],
})

export class HistoryPage {
  loading = true; // Initial loading state
  trades: GroupedTrades[];
  ios: boolean;
  segment = "trades";
  excludeTracks: any = [];

  constructor(private apiService: ApiService, private actionSheetCtrl: ActionSheetController, public config: Config, public modalCtrl: ModalController, public routerOutlet: IonRouterOutlet) {

  }

  ngOnInit() {
    this.ios = this.config.get("mode") === "ios";
  }

  ionViewWillEnter() {
    this.loading = true;
    console.log(this.loading);
    this.apiService.getHistoryTrades()
      .subscribe((res: any[]) => {
        this.trades = this.groupTradesByCloseDate(res);
        this.loading = false; // Set loading to false after fetching trades
        console.log(this.loading);
        console.log(this.trades);
      });
  }

  ionViewDidEnter() {
    
  }

  groupTradesByCloseDate(trades: Trade[]): GroupedTrades[] {
    return trades
      .filter(trade => trade.type !== "DEAL_TYPE_BALANCE") // Exclude balance trades
      .map(trade => ({
        ...trade,
        type: trade.type === "DEAL_TYPE_BUY" ? "buy" : trade.type === "DEAL_TYPE_SELL" ? "sell" : trade.type,
        comment: trade.comment
          ? trade.comment.toLowerCase().includes("tp")
            ? "tp"
            : trade.comment.toLowerCase().includes("sl")
            ? "sl"
            : trade.comment
          : trade.comment,
      })) // Map type and comment fields
      .reduce((acc, trade) => {
        const date = trade.closeTime.split(" ")[0]; // Extract YYYY-MM-DD
        let group = acc.find(g => g.date === date);
  
        if (!group) {
          group = { date, trades: [], pips: 0 }; // Initialize pips for the group
          acc.push(group);
        }
  
        group.trades.push(trade);
        group.pips += trade.pips || 0; // Accumulate pips, default to 0 if undefined
        return acc;
      }, [] as GroupedTrades[]);
  }

  filterBySymbol() {

  }

  async filterByDate() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
