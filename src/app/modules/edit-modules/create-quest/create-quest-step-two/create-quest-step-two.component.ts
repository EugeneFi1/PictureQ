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
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;

  constructor(private location: Location,
              private titleService: Title,
              private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  }


  public addPage(){

  }

}
