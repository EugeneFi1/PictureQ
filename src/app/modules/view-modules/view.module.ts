import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestComponent} from './list-of-quests/quests/quest/quest.component';
import {SearchHeaderComponent} from './list-of-quests/search-header/search-header.component';
import {QuestsComponent} from './list-of-quests/quests/quests.component';
import {ListOfQuestsComponent} from './list-of-quests/list-of-quests.component';
import {ViewModulesComponent} from './view-modules.component';
import {SharedModule} from '../shared.modules';
import {AppRoutingModule} from '../../app-routing.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'view', children: [
    {path: 'ist-of-quests', component: ListOfQuestsComponent},
  ]
}];

@NgModule({
  declarations: [
    ViewModulesComponent,
    ListOfQuestsComponent,
    QuestsComponent,
    QuestComponent,
    SearchHeaderComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewModule {
}
