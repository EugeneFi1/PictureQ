import {RouterModule, Routes} from '@angular/router';
import {CreateQuestComponent} from './create-quest/create-quest.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreatePageComponent} from './create-page/create-page.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateQuestComponent,
  },
  {
    path: 'create/page',
    component: CreatePageComponent,
    // children: [
    //   {
    //     path: 'page',
    //     component: CreatePageComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class EditRoutingModule{}

