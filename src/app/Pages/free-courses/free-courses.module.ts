import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeCoursesPageRoutingModule } from './free-courses-routing.module';

import { FreeCoursesPage } from './free-courses.page';
import { ComponentsModule } from 'src/app/Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreeCoursesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FreeCoursesPage]
})
export class FreeCoursesPageModule {}
