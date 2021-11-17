import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SildesComponent } from './sildes/sildes.component';
import { LoadingComponent } from './loading/loading.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


var componts = [SildesComponent, LoadingComponent]
@NgModule({
  declarations: [componts],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [componts]
})
export class ComponentsModule { }
