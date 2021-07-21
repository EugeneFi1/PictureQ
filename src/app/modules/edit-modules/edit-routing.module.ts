import {RouterModule, Routes} from '@angular/router';
import {CreateQuestComponent} from './create-quest/create-quest.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  { path: 'create', component: CreateQuestComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    ],
  exports: [RouterModule],
})
export class EditRoutingModule{}

