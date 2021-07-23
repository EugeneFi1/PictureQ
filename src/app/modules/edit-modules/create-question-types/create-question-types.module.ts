import {NgModule} from '@angular/core';
import {MatchMatchesComponent} from './match-matches/match-matches.component';
import {AnswerOptionComponent} from './answer-option/answer-option.component';

@NgModule({
  declarations: [
    AnswerOptionComponent,
    MatchMatchesComponent
  ],
  exports: [
    AnswerOptionComponent,
    MatchMatchesComponent
  ]
})
export class CreateQuestionTypesModule {
}
