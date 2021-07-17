import {NgModule} from '@angular/core';
import {QuestComponent} from './list-of-quests/quests/quest/quest.component';
import {SearchHeaderComponent} from './list-of-quests/search-header/search-header.component';
import {QuestsComponent} from './list-of-quests/quests/quests.component';
import {ListOfQuestsComponent} from './list-of-quests/list-of-quests.component';
import {ViewModulesComponent} from './view-modules.component';
import {SharedModule} from '../shared.modules';
import {RouterModule} from '@angular/router';
import {JwPaginationModule} from 'jw-angular-pagination';


@NgModule({
  declarations: [
    ViewModulesComponent,
    ListOfQuestsComponent,
    QuestsComponent,
    QuestComponent,
    SearchHeaderComponent,
  ],
    imports: [
        SharedModule,
        RouterModule,
        JwPaginationModule,
    ]
})
export class ViewModule {
}
