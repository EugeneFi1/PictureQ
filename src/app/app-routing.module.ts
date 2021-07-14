import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {ListOfQuestsComponent} from './modules/view-modules/list-of-quests/list-of-quests.component';
import {CreateQuestComponent} from './modules/edit-modules/create-quest/create-quest.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-of-quests',
    pathMatch: 'full'
  },
  // {path: 'create-quest', component: CreateQuestComponent},
  {path: 'list-of-quests', component: ListOfQuestsComponent},

  {path: 'edit', loadChildren: './modules/edit-modules/edit.module#EditModule'},
  {path: 'test', component: TestComponent},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
