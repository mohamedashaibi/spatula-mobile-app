import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeCoursesPage } from './free-courses.page';

const routes: Routes = [
  {
    path: '',
    component: FreeCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeCoursesPageRoutingModule {}
