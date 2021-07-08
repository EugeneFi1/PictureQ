import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewModulesComponent} from './view-modules/view-modules.component';
import {EditModulesComponent} from './edit-modules/edit-modules.component';
import {TestComponent} from './test/test.component';
import {CreateQuestComponent} from './edit-modules/create-quest/create-quest.component';
import {ListOfQuestsComponent} from './view-modules/list-of-quests/list-of-quests.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';

const routes: Routes = [
  {path: 'view', component: ViewModulesComponent},
  {path: 'edit', component: EditModulesComponent},
  {path: 'test', component: TestComponent},
  {path: 'create-quest', component: CreateQuestComponent},
  {path: 'list-of-quests', component: ListOfQuestsComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
