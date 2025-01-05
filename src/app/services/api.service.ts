import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  metrics: any;
  historyTrades: any;

  SERVER_HOST = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // getMetrics(): Observable<any> {
  //   return this.http.get<any>("http://localhost:3000/stats/metrics").pipe(
  //     map((res: any) => {
  //       return res.metrics;
  //     })
  //   );
  // }

  // client(url: string, method: string = 'GET'): Observable<any> {
  //   return this.http.request(method, `${this.SERVER_HOST}/client/${url}`).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  client(url: string, method: string = 'GET'): Observable<any> {
    return this.http.request(method, `assets/data/${url}.json`)
      .pipe(map(res => {
        return res;
      }, this));
  }

  getMetrics(): Observable<any> {
    if (this.metrics) {
      return of(this.metrics);
    } else {
      return this.http
        .get<any>('assets/data/metrics.json')
        .pipe(map(res => {
          this.metrics = res.metrics;
          return this.metrics;
        }, this));
    }
  }

  getHistoryTrades(): Observable<any> {
    if (this.historyTrades) {
      return of(this.historyTrades);
    } else {
      return this.http
        .get<any>('assets/data/history-trades.json')
        .pipe(map(res => {
          this.historyTrades = res.trades;
          return this.historyTrades;
        }, this));
    }
  }
}
