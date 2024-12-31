import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  metrics: any;

  constructor(private http: HttpClient) {}

  // getMetrics(): Observable<any> {
  //   return this.http.get<any>("http://localhost:3000/stats/metrics").pipe(
  //     map((res: any) => {
  //       return res.metrics;
  //     })
  //   );
  // }

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
}
