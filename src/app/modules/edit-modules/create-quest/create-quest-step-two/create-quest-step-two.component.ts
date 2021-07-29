import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ValidationMessage} from "../../../../models/labels/validation.message";
import {MatOptionSelectionChange} from "@angular/material/core";

interface Question {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-quest-step-two',
  templateUrl: './create-quest-step-two.component.html',
  styleUrls: ['./create-quest-step-two.component.less']
})
export class CreateQuestStepTwoComponent implements OnInit {

  @Input() secondStepForm!: FormGroup;

  answerOptionArray: any = [];
  answerQuestionArray: any = [];
  choosePictureArray: any = [];
  findObjectArray:  any = [];
  matchMatchesArray: any = [];
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  questionType?: string;

  questions: Question[] = [
    {value: 'answer-option', viewValue: 'answer option'},
    {value: 'match-matches', viewValue: 'match matches'},
    {value: 'choose-right-picture', viewValue: 'choose the right picture'},
    {value: 'find-object-on-the-picture', viewValue: 'find object on the picture'},
    {value: 'answer-question', viewValue: 'answer question'},
  ];
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public addPage(){
  }

  addAnswerOption() {
    this.answerOptionArray = [...this.answerOptionArray, this.answerOptionArray.length];
  }

  addMatchMatches() {
    this.matchMatchesArray = [...this.matchMatchesArray, this.matchMatchesArray.length];
  }

  addChoosePicture() {
    this.choosePictureArray = [...this.choosePictureArray, this.choosePictureArray.length];
  }

  addFindObject() {
    this.findObjectArray = [...this.findObjectArray, this.findObjectArray.length];
  }

  addAnswerQuestion() {
    this.answerQuestionArray = [...this.answerQuestionArray, this.answerQuestionArray.length];
  }

  chooseQuestionType(data: MatOptionSelectionChange): void {
    if(data.isUserInput){
      this.questionType = data.source.value;
      this.cdr = detectChanges();
    }
  }
}
