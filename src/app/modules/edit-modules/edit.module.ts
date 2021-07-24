import { NgModule } from '@angular/core';
import {EditModulesComponent} from './edit-modules.component';
import {CreateQuestComponent} from './create-quest/create-quest.component';
import {SharedModule} from '../shared.modules';
import {EditRoutingModule} from './edit-routing.module';
import { CreateQuestStepTwoComponent } from './create-quest/create-quest-step-two/create-quest-step-two.component';
import { CreateQuestStepThreeComponent } from './create-quest/create-quest-step-three/create-quest-step-three.component';
import { CreateQuestStepOneComponent } from './create-quest/create-quest-step-one/create-quest-step-one.component';
import { AnswerOptionComponent } from './questions/answer-option/answer-option.component';
import { MatchMatchesComponent } from './questions/match-matches/match-matches.component';
import { ChoosePictureComponent } from './questions/choose-picture/choose-picture.component';
import { FindObjectOnPictureComponent } from './questions/find-object-on-picture/find-object-on-picture.component';
import { AnswerQuestionComponent } from './questions/answer-question/answer-question.component';
import { FindObjectDialogComponent } from './questions/find-object-on-picture/find-object-dialog/find-object-dialog.component';


@NgModule({
  declarations: [
    EditModulesComponent,
    CreateQuestComponent,
    CreateQuestStepTwoComponent,
    CreateQuestStepThreeComponent,
    CreateQuestStepOneComponent,
    AnswerOptionComponent,
    MatchMatchesComponent,
    ChoosePictureComponent,
    FindObjectOnPictureComponent,
    AnswerQuestionComponent,
    FindObjectDialogComponent,
  ],
  imports: [
    SharedModule,
    EditRoutingModule,
  ],
})
export class EditModule { }
