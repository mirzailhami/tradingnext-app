import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dash',
        children: [
          {
            path: '',
            loadChildren: () => import('../dash/dash.module').then(m => m.DashModule)
          }
        ]
      },
      {
        path: 'trades',
        children: [
          {
            path: '',
            loadChildren: () => import('../trades/trades.module').then(m => m.TradesModule)
            // component: SchedulePage,
          },
          // {
          //   path: 'session/:sessionId',
          //   loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          // }
        ]
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () => import('../history/history.module').then(m => m.HistoryPageModule)
          },
          // {
          //   path: 'session/:sessionId',
          //   loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          // },
          // {
          //   path: 'speaker-details/:speakerId',
          //   loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          // }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/trades',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

