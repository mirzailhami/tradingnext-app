import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController, Config, IonRouterOutlet, ModalController } from '@ionic/angular';
import { TradeFilterPage } from '../trade-filter/trade-filter';
import { ApiService } from '../../services/api.service';
import { delay } from 'rxjs';

interface Trade {
  symbol: string;
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
  groupedTrades: GroupedTrades[];
  trades: GroupedTrades[];
  ios: boolean;
  segment = "trades";
  excludeTracks: any = [];
  allSymbols: string[];
  filterBySymbol: string = 'all';

  constructor(private apiService: ApiService, private actionSheetCtrl: ActionSheetController, public config: Config, public modalCtrl: ModalController, public routerOutlet: IonRouterOutlet) {

  }

  ngOnInit() {
    this.ios = this.config.get("mode") === "ios";
  }

  ionViewWillEnter() {
    this.loading = true;
  }

  ionViewDidEnter() {
    this.apiService.getHistoryTrades()
      .pipe(delay(50))
      .subscribe((res: any[]) => {
        const { groupedTrades, symbols } = this.groupTradesByCloseDate(res);
        this.groupedTrades = groupedTrades;
        this.trades = groupedTrades;
        this.allSymbols = symbols;
        this.loading = false; // Set loading to false after fetching trades
        console.log(this.groupedTrades);
      });
  }

  groupTradesByCloseDate(trades: Trade[]): { groupedTrades: GroupedTrades[], symbols: string[] } {
    const symbols = new Set<string>();

    const groupedTrades = trades
      .filter(trade => trade.type !== "DEAL_TYPE_BALANCE") // Exclude balance trades
      .map(trade => {
        symbols.add(trade.symbol); // Collect symbols
        return {
          ...trade,
          type: trade.type === "DEAL_TYPE_BUY" ? "buy" : trade.type === "DEAL_TYPE_SELL" ? "sell" : trade.type,
          comment: trade.comment
            ? trade.comment.toLowerCase().includes("tp")
              ? "tp"
              : trade.comment.toLowerCase().includes("sl")
                ? "sl"
                : trade.comment
            : trade.comment,
        };
      }) // Map type and comment fields
      .reduce((acc, trade) => {
        const date = trade.closeTime.split(" ")[0]; // Extract YYYY-MM-DD
        let group = acc.find(g => g.date === date);

        if (!group) {
          group = { date, trades: [], pips: 0 }; // Initialize pips for the group
          acc.push(group);
        }

        group.trades.push(trade);
        group.pips += trade.pips;
        return acc;
      }, []);

    return { groupedTrades, symbols: Array.from(symbols) };
  }

  filterTradeBySymbol(symbol: string = 'all') {
    console.log(symbol);
    this.filterBySymbol = symbol;
    if (symbol === 'all') {
      this.trades = this.groupedTrades;
    } else {
      this.trades = this.groupedTrades.map((group) => {
        const filteredTrades = group.trades.filter((trade) => trade.symbol === symbol);
        return filteredTrades.length > 0 ? { ...group, trades: filteredTrades } : null;
      }).filter((group) => group !== null);
    }
    // filter this.trades by symbol

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

  countPips(trades: Trade[]): number {
    // calculate and return total pips from trades array
    return trades.reduce((totalPips, trade) => totalPips + trade.pips, 0) * 10;
  }
}
