import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaidRecipesPage } from './paid-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: PaidRecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaidRecipesPageRoutingModule {}
