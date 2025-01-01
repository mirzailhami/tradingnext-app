import { Component } from "@angular/core";
import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from '@googlproxer/ion-range-calendar';

import * as moment from "moment";

import {
  ActionSheetController,
  Config,
  IonRouterOutlet,
  ModalController,
} from "@ionic/angular";
import { TradeFilterPage } from "../trade-filter/trade-filter";
import { ApiService } from "../../services/api.service";
import { delay, Subscription } from "rxjs";

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
  selector: "page-history",
  templateUrl: "history.html",
  styleUrls: ["./../trades/trades.scss"],
})
export class HistoryPage {
  loading = true; // Initial loading state
  groupedTrades: GroupedTrades[];
  trades: GroupedTrades[];
  ios: boolean;
  segment = "trades";
  excludeTracks: any = [];
  allSymbols: string[];
  filterBySymbol: string = "all";
  filterByDate: string;
  private $brokerTime: Subscription;
  periods: any[] = [];
  customPeriodRange: string;

  constructor(
    private apiService: ApiService,
    private actionSheetCtrl: ActionSheetController,
    public config: Config,
    public modalCtrl: ModalController,
    public routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit() {
    this.ios = this.config.get("mode") === "ios";
    this.$brokerTime = this.apiService
      .client("server-time")
      .subscribe((res: any) => {
        this.periods = this.getPeriods(res.brokerTime);
        console.log(this.periods);
        this.customPeriodRange = this.periods[this.periods.length - 1].range;
      });
  }

  ngOnDestroy() {
    if (this.$brokerTime) {
      this.$brokerTime.unsubscribe();
    }
  }

  ionViewWillEnter() {
    this.loading = true;
  }

  ionViewDidEnter() {
    this.apiService
      .getHistoryTrades()
      .pipe(delay(50))
      .subscribe((res: any[]) => {
        const { groupedTrades, symbols } = this.groupTradesByCloseDate(res);
        this.groupedTrades = groupedTrades;
        this.trades = groupedTrades;
        this.allSymbols = symbols;
        this.loading = false; // Set loading to false after fetching trades
      });
  }

  groupTradesByCloseDate(trades: Trade[]): {
    groupedTrades: GroupedTrades[];
    symbols: string[];
  } {
    const symbols = new Set<string>();

    const groupedTrades = trades
      .filter((trade) => trade.type !== "DEAL_TYPE_BALANCE") // Exclude balance trades
      .map((trade) => {
        symbols.add(trade.symbol); // Collect symbols
        return {
          ...trade,
          type:
            trade.type === "DEAL_TYPE_BUY"
              ? "buy"
              : trade.type === "DEAL_TYPE_SELL"
              ? "sell"
              : trade.type,
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
        let group = acc.find((g) => g.date === date);

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

  getPeriods(base: Date) {
    if (this.trades.length === 0) return [];
    const baseDate = moment(base);
    const today = baseDate.clone();
    const startOfWeek = baseDate.clone().startOf("week");
    const startOfMonth = baseDate.clone().startOf("month");
    const startOfThreeMonths = baseDate.clone().subtract(3, "months");
    const startOfSixMonths = baseDate.clone().subtract(6, "months");

    return [
      { name: "Today", id: "today", range: today.format("M/D/YY") },
      {
        name: "This week",
        id: "thisweek",
        range: `${startOfWeek.format("M/D/YY")} - ${today.format("M/D/YY")}`,
      },
      {
        name: "This month",
        id: "thismonth",
        range: `${startOfMonth.format("M/D/YY")} - ${today.format("M/D/YY")}`,
      },
      {
        name: "Last 3 months",
        id: "last3months",
        range: `${startOfThreeMonths.format("M/D/YY")} - ${today.format(
          "M/D/YY"
        )}`,
      },
      {
        name: "Last 6 months",
        id: "last6months",
        range: `${startOfSixMonths.format("M/D/YY")} - ${today.format(
          "M/D/YY"
        )}`,
      },
      {
        name: "Custom period",
        id: "custom",
        range: `${startOfSixMonths.format("M/D/YY")} - ${today.format(
          "M/D/YY"
        )}`,
      },
    ];
  }

  filterTradeBySymbol(groupedTrades: GroupedTrades[], symbol: string = "all") {
    if (symbol === "all") {
      return groupedTrades;
    } else {
      return groupedTrades
        .map((group: GroupedTrades) => {
          const filteredTrades = group.trades.filter(
            (trade) => trade.symbol === symbol
          );
          return filteredTrades.length > 0
            ? {
                ...group,
                date: group.date,
                pips: filteredTrades.reduce(
                  (totalPips, trade) => totalPips + trade.pips,
                  0
                ),
                trades: filteredTrades,
              }
            : null;
        })
        .filter((group: null) => group !== null);
    }
  }

  filterTradeByDate(groupedTrades: GroupedTrades[], id: string) {
    let startDate: Date, endDate: Date;
    
    const period = this.periods.find((p) => p.id === id);
    if (!period) return groupedTrades;

    // Check if the range contains a single date or a date range
    if (period.range.includes("-")) {
      // Split the range into start and end dates
      const dates = period.range.split(" - ");
      startDate = new Date(dates[0]);
      endDate = new Date(dates[1]);
    } else {
      // Single date, set both start and end dates to the same value
      startDate = new Date(period.range);
      endDate = new Date(period.range);
    }

    return groupedTrades.filter((trade) => {
      const tradeDate = new Date(trade.date);
      return tradeDate >= startDate && tradeDate <= endDate;
    });
  }

  filterTrade() {
    if (this.filterByDate === 'custom') {
      this.openCalendar();
    } else {
      let trades = this.filterTradeByDate(this.groupedTrades, this.filterByDate);
      trades = this.filterTradeBySymbol(trades, this.filterBySymbol);
      this.trades = trades;
    }
  }

  async openCalendar() {
    const options: CalendarModalOptions = {
      title: 'Custom period',
      pickMode: 'range'
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
    });

    myCalendar.present();

    const event = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    console.log(date);
  }

}
