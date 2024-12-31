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

@Component({
  selector: "page-dash",
  templateUrl: "dash.html",
  styleUrls: ["./dash.scss"],
})
export class DashPage implements OnInit {
  ios: boolean;
  segment = 'summary';
  metrics = this.apiService.getMetrics();

  constructor(private apiService: ApiService, public config: Config) {
    this.apiService.getMetrics()
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnInit() {
    this.ios = this.config.get("mode") === "ios";
  }
}
