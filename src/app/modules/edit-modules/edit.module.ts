import { NgModule } from '@angular/core';
import {EditModulesComponent} from './edit-modules.component';
import {CreateQuestComponent} from './create-quest/create-quest.component';
import {SharedModule} from '../shared.modules';
import {EditRoutingModule} from './edit-routing.module';


@NgModule({
  declarations: [
    EditModulesComponent,
    CreateQuestComponent,
  ],
  imports: [
    SharedModule,
    EditRoutingModule,
  ],
})
export class EditModule { }
