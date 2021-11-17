import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaidCoursesPage } from './paid-courses.page';

const routes: Routes = [
  {
    path: '',
    component: PaidCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaidCoursesPageRoutingModule {}
