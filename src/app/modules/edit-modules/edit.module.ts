import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditModulesComponent} from './edit-modules.component';
import {CreateQuestComponent} from './create-quest/create-quest.component';
import {SharedModule} from '../shared.modules';
import {AppRoutingModule} from '../../app-routing.module';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'edit' , children: [
      { path: 'create-quest', component: CreateQuestComponent}
    ]
  }

];

@NgModule({
  declarations: [
    EditModulesComponent,
    CreateQuestComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class EditModule { }
