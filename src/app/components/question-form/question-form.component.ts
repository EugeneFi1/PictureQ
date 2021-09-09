import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ValidationMessage} from "../../models/labels/validation.message";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.less']
})
export class QuestionFormComponent {

  @Input() parentForm!: FormGroup;

  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  minLengthErrorMessage = ValidationMessage.minLength;

  constructor() { }


}
