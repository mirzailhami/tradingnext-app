import '@angular/compiler';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


// bootstrapApplication(AppComponent, {
//   providers: [
//     provideIonicAngular({
//       useSetInputAPI: true, //  required for input signals on controller based modals.
//     })
//   ]
// })
  // .catch(err => console.error(err));