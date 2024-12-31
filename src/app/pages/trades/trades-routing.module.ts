import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TradesPage } from './trades';

const routes: Routes = [
  {
    path: '',
    component: TradesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradesRoutingModule { }
