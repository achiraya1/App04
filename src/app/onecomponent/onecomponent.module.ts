import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnecomponentPageRoutingModule } from './onecomponent-routing.module';

import { OnecomponentPage } from './onecomponent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnecomponentPageRoutingModule
  ],
  declarations: [OnecomponentPage]
})
export class OnecomponentPageModule {}
