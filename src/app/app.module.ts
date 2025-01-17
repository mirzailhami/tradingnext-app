import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { DurationPipe } from './pipes/duration.pipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [DurationPipe, AppComponent],
  providers: [
    InAppBrowser,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    provideIonicAngular({
      useSetInputAPI: true, //  required for input signals on controller based modals.
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
