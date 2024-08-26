import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnecomponentPage } from './onecomponent.page';

const routes: Routes = [
  {
    path: '',
    component: OnecomponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnecomponentPageRoutingModule {}
