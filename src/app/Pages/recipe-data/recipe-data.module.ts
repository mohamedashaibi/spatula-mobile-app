import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeDataPageRoutingModule } from './recipe-data-routing.module';

import { RecipeDataPage } from './recipe-data.page';
import { ComponentsModule } from 'src/app/Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDataPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecipeDataPage]
})
export class RecipeDataPageModule {}
