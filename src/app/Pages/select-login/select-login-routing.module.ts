import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectLoginPage } from './select-login.page';

const routes: Routes = [
  {
    path: '',
    component: SelectLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectLoginPageRoutingModule {}
