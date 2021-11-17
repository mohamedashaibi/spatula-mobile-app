import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDataPage } from './course-data.page';

const routes: Routes = [
  {
    path: '',
    component: CourseDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDataPageRoutingModule {}
