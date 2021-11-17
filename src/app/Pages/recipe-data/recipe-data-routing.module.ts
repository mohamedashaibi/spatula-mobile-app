import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDataPage } from './recipe-data.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeDataPageRoutingModule {}
