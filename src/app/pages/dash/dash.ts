import {
  Component,
  ElementRef,
  Inject,
  ViewChild,
  AfterViewInit,
  OnInit
} from "@angular/core";
import { ConferenceData } from "../../providers/conference-data";
import { Platform, Config } from "@ionic/angular";
import { DOCUMENT } from "@angular/common";
import { ApiService } from "../../services/api.service";
import { Chart } from "../../providers/chart";

@Component({
  selector: "page-dash",
  templateUrl: "dash.html",
  styleUrls: ["./dash.scss"],
})
export class DashPage implements OnInit {
  ios: boolean;
  segment = 'summary';
  metrics = this.apiService.getMetrics();

  constructor(private apiService: ApiService, public config: Config, private Chart: Chart) {
    this.apiService.getMetrics()
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnInit() {
    this.ios = this.config.get("mode") === "ios";

    this.Chart.gauge('#profitability', 58, {
      size: 200,
      ringWidth: 15,
      maxValue: 100,
      transitionMs: 7000,
    });

    this.Chart.gauge('#risk', 9, {
      size: 200,
      ringWidth: 15,
      maxValue: 10,
      transitionMs: 7000,
    });
  }
}
