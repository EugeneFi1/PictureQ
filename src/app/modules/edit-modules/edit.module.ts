import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditModulesComponent} from './edit-modules.component';
import {CreateQuestComponent} from './create-quest/create-quest.component';
import {SharedModule} from '../shared.modules';
import {RouterModule} from '@angular/router';
import {EditRoutingModule} from './edit-routing.module';


@NgModule({
  declarations: [
    EditModulesComponent,
    CreateQuestComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    EditRoutingModule
  ],

})
export class EditModule { }
