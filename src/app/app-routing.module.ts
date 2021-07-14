import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {ListOfQuestsComponent} from './modules/view-modules/list-of-quests/list-of-quests.component';

const routes: Routes = [
  {
    path: 'edit',
    loadChildren: () => import('./modules/edit-modules/edit.module').then(m => m.EditModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: ListOfQuestsComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
