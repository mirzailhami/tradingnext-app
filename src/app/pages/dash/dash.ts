import {
  Component,
  ElementRef,
  Inject,
  ViewChild,
  AfterViewInit,
  OnInit,
} from "@angular/core";
import { ConferenceData } from "../../providers/conference-data";
import { Platform, Config } from "@ionic/angular";
import { DOCUMENT } from "@angular/common";
import { ApiService } from "../../services/api.service";
import { Chart } from "../../providers/chart";
import { Subscription, Observable } from "rxjs";

@Component({
  selector: "page-dash",
  templateUrl: "dash.html",
  styleUrls: ["./dash.scss"],
})
export class DashPage implements OnInit {
  ios: boolean;
  segment = "summary";
  metrics$: Observable<any> = this.apiService.stats("metrics");
  metricsSubscription: Subscription;
  metrics: any;
  summary: any;
  periods: any;

  constructor(
    private apiService: ApiService,
    public config: Config,
    private Chart: Chart
  ) {}

  ngOnInit() {
    this.ios = this.config.get("mode") === "ios";

    // this.metricsSubscription = this.metrics$.subscribe((res) => {
    // console.log(res);
    // this.metrics = res;
    // this.Chart.init(res);
    // });

    this.apiService.client("metrics").subscribe((res: any) => {
      res.metrics.dailyGrowth = res.metrics.dailyGrowth.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      res.metrics.monthlyAnalytics = res.metrics.monthlyAnalytics.map(t => ({
        ...t,
        averageHoldingTimeLongs: t.currencies.length > 0 ? t.currencies.reduce((acc: number, curr: { averageHoldingTimeLongsInMilliseconds: number }) => acc + (curr.averageHoldingTimeLongsInMilliseconds || 0), 0) / t.currencies.length : 0,
        averageHoldingTimeShorts: t.currencies.length > 0 ? t.currencies.reduce((acc: number, curr: { averageHoldingTimeShortsInMilliseconds: number }) => acc + (curr.averageHoldingTimeShortsInMilliseconds || 0), 0) / t.currencies.length : 0,
        rewardToRiskRatio: t.currencies.length > 0 ? t.currencies.reduce((acc, curr) => acc + (curr.rewardToRiskRatio || 0), 0) / t.currencies.length : 0
      }));
      this.summary = res.metrics;
      console.log(res.metrics);
      this.periods = Object.entries(res.metrics.periods).map(
        ([key, value]) => {
          return {
            name: key === 'today' ? 'Today' :
                key === 'thisWeek' ? 'This Week' :
                key === 'thisMonth' ? 'This Month' :
                key === 'thisYear' ? 'This Year' :
                key.charAt(0).toUpperCase() + key.slice(1),
            ...(typeof value === 'object' ? value : {}),
          };
        }
      );
    });

    this.metricsSubscription = this.apiService
      .client("metrics-summary")
      .subscribe((res: any) => {
        this.metrics = res;
        this.Chart.init(res);
      });
  }

  ngondestroy() {
    this.metricsSubscription.unsubscribe();
  }
}
