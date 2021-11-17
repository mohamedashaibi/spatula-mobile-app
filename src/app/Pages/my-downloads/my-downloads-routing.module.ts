import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDownloadsPage } from './my-downloads.page';

const routes: Routes = [
  {
    path: '',
    component: MyDownloadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDownloadsPageRoutingModule {}
