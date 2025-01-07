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

  constructor(
    private apiService: ApiService,
    public config: Config,
    private Chart: Chart
  ) {}

  ngOnInit() {
    this.ios = this.config.get("mode") === "ios";

    this.metricsSubscription = this.metrics$.subscribe((res) => {
      this.metrics = res;
      this.Chart.init(res);
    });
  }

  ngondestroy() {
    this.metricsSubscription.unsubscribe();
  }
}
