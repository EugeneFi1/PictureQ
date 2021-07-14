import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {ListOfQuestsComponent} from './modules/view-modules/list-of-quests/list-of-quests.component';
import {CreateQuestComponent} from './modules/edit-modules/create-quest/create-quest.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: ListOfQuestsComponent
  },
  // {path: 'create-quest', component: CreateQuestComponent},
  // {path: 'test', component: TestComponent},
  {path: '**', component: NotFoundPageComponent},

  {path: 'edit', loadChildren: () => import('./modules/edit-modules/edit.module').then(m => m.EditModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
