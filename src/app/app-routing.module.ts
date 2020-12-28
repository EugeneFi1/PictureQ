import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewModulesComponent} from './view-modules/view-modules.component';
import {EditModulesComponent} from './edit-modules/edit-modules.component';
import {InsertPictureComponent} from './edit-modules/insert-picture/insert-picture.component';

const routes: Routes = [
  {path: 'view', component: ViewModulesComponent},
  {path: 'edit', component: EditModulesComponent, children: [
      {path: 'insert-picture', component: InsertPictureComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
