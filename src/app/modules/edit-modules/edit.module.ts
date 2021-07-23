import { NgModule } from '@angular/core';
import {EditModulesComponent} from './edit-modules.component';
import {CreateQuestComponent} from './create-quest/create-quest.component';
import {SharedModule} from '../shared.modules';
import {EditRoutingModule} from './edit-routing.module';
import { CreatePageComponent } from './create-page/create-page.component';
import {CreateQuestionTypesModule} from './create-question-types/create-question-types.module';


@NgModule({
  declarations: [
    EditModulesComponent,
    CreateQuestComponent,
    CreatePageComponent,
  ],
  imports: [
    SharedModule,
    EditRoutingModule,
    CreateQuestionTypesModule,
  ],
})
export class EditModule { }
