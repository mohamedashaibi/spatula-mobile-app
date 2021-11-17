import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectLoginPageRoutingModule } from './select-login-routing.module';

import { SelectLoginPage } from './select-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectLoginPageRoutingModule
  ],
  declarations: [SelectLoginPage]
})
export class SelectLoginPageModule {}
