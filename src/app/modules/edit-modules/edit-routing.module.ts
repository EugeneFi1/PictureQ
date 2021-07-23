import {RouterModule, Routes} from '@angular/router';
import {CreateQuestComponent} from './create-quest/create-quest.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateQuestStepOneComponent} from "./create-quest/create-quest-step-one/create-quest-step-one.component";
import {AnswerOptionComponent} from "./questions/answer-option/answer-option.component";
import {MatchMatchesComponent} from "./questions/match-matches/match-matches.component";
import {AnswerQuestionComponent} from "./questions/answer-question/answer-question.component";
import {ChoosePictureComponent} from "./questions/choose-picture/choose-picture.component";
import {FindObjectOnPictureComponent} from "./questions/find-object-on-picture/find-object-on-picture.component";
import {CreateQuestStepTwoComponent} from "./create-quest/create-quest-step-two/create-quest-step-two.component";

const routes: Routes = [
  {
    path: 'create',
    component: CreateQuestComponent,
  },
  {
    path: 'answer',
    component: AnswerOptionComponent
  },
  {
    path: 'picture',
    component: ChoosePictureComponent
  },
  {
    path: 'match',
    component: MatchMatchesComponent
  },
  {
    path: 'question',
    component: AnswerQuestionComponent
  },
  {
    path: 'find',
    component: FindObjectOnPictureComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class EditRoutingModule{}

