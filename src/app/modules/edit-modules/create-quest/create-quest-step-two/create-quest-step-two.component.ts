import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ValidationMessage} from "../../../../models/labels/validation.message";
import {Location} from "@angular/common";
import {Title} from "@angular/platform-browser";

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

  constructor() { }

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
}
