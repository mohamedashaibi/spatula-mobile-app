import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaidRecipesPageRoutingModule } from './paid-recipes-routing.module';

import { PaidRecipesPage } from './paid-recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaidRecipesPageRoutingModule
  ],
  declarations: [PaidRecipesPage]
})
export class PaidRecipesPageModule {}
