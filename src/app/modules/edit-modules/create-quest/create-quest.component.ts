import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {CreateQuestStepOneComponent} from "./create-quest-step-one/create-quest-step-one.component";
import {CreateQuestStepTwoComponent} from "./create-quest-step-two/create-quest-step-two.component";
import {CreateQuestStepThreeComponent} from "./create-quest-step-three/create-quest-step-three.component";
import {FormGroup} from "@angular/forms";
import {CreateQuestFormService} from "./service/create-quest-form-service";

@Component({
  selector: 'app-create-quest',
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.less']
})
export class CreateQuestComponent implements OnInit {

  firstStepForm: FormGroup;
  secondStepForm: FormGroup;

  constructor(private location: Location,
              private titleService: Title,
              private createQuestFormService: CreateQuestFormService
  ) {
    this.titleService.setTitle('Create quest');
    this.firstStepForm = this.createQuestFormService.firstStepForm();
    this.secondStepForm = this.createQuestFormService.secondStepForm();
  }

  ngOnInit(): void {
  }


}


