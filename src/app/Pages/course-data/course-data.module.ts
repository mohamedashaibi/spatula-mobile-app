import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseDataPageRoutingModule } from './course-data-routing.module';

import { CourseDataPage } from './course-data.page';
import { ComponentsModule } from 'src/app/Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseDataPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CourseDataPage]
})
export class CourseDataPageModule { }
