import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessage} from "../../../../models/labels/validation.message";

@Component({
  selector: 'app-match-matches',
  templateUrl: './match-matches.component.html',
  styleUrls: ['./match-matches.component.less']
})
export class MatchMatchesComponent implements OnInit {

  matchMatchesForm!: FormGroup;
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  minLengthErrorMessage = ValidationMessage.minLength;

  constructor(private formBuilder: FormBuilder) {
    this.matchMatchesForm = this.formBuilder.group({
      commonForm: this.formBuilder.group({
        question: new FormControl(null, [
          Validators.required,
          Validators.minLength(10)
        ]),
        description: new FormControl(),
        explanation: new FormControl()
      }),
      fileForm: this.formBuilder.group({
        file: new FormControl()
      }),
      options: this.formBuilder.array([this.createOption(), this.createOption()])
    })
  }


  ngOnInit(): void {
  }

  options() {
    return this.matchMatchesForm.controls["options"] as FormArray;
  }

  public createOption(): FormGroup {
    return this.formBuilder.group({
      option: ['', Validators.required],
      answer: ['', Validators.required],
    });
  }

  public addOption() {
    this.options().push(this.createOption());
  }

  deleteOption(optIdx: number) {
    this.options().removeAt(optIdx);
  }

  submit() {
    console.log(this.matchMatchesForm.value)
  }
}
