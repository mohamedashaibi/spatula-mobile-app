import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyDownloadsPageRoutingModule } from './my-downloads-routing.module';

import { MyDownloadsPage } from './my-downloads.page';
import { ComponentsModule } from 'src/app/Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MyDownloadsPageRoutingModule
  ],
  declarations: [MyDownloadsPage]
})
export class MyDownloadsPageModule {}
