import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatOptionSelectionChange} from '@angular/material/core';

interface Question {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePageComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) { }

  questionType?: string;

  questions: Question[] = [
    {value: 'answer-option', viewValue: 'answer option'},
    {value: 'match-matches', viewValue: 'match matches'},
  ];

  ngOnInit(): void {
  }

  chooseQuestionType(data: MatOptionSelectionChange): void {
    if (data.isUserInput) {
      this.questionType = data.source.value;
      this.cdr.detectChanges();
    }
  }
}
