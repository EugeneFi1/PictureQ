import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewModulesComponent} from './view-modules/view-modules.component';
import {EditModulesComponent} from './edit-modules/edit-modules.component';

const routes: Routes = [
  {path: 'view', component: ViewModulesComponent},
  {path: 'edit', component: EditModulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
