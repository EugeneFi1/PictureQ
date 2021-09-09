import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CreateQuestFormService} from "./service/create-quest-form-service";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";


@Component({
  selector: 'app-create-quest',
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.less'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class CreateQuestComponent implements OnInit {

  stepperForm: FormGroup;
  @ViewChild('stepper', {static: false}) stepper: any;
  firstStepForm: FormGroup;
  secondStepForm: FormGroup;


  constructor(private location: Location,
              private titleService: Title,
              private createQuestFormService: CreateQuestFormService,
              private formBuilder: FormBuilder
  ) {
    this.titleService.setTitle('Create quest');
    this.firstStepForm = this.createQuestFormService.firstStepForm();
    this.secondStepForm = this.createQuestFormService.secondStepForm();
    this.stepperForm = this.formBuilder.group({
      steps: this.formBuilder.array([this.newStep()]),
    })

  }

  public steps(): FormArray {
    return this.stepperForm.get("steps") as FormArray;
  }

  public newStep(): FormGroup{
    return this.createQuestFormService.secondStepForm();
  }

  public addStep(){
    this.steps().push(this.newStep());
  }

  public removeStep(stepIdx: number){
    this.steps().removeAt(stepIdx);
  }

  public ngOnInit(): void {
  }

}
