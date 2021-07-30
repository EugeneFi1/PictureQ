import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessage} from "../../../../models/labels/validation.message";
import {ValidFile} from "../../../../components/file-uploader/file-uploader.component";

@Component({
  selector: 'app-answer-option',
  templateUrl: './answer-option.component.html',
  styleUrls: ['./answer-option.component.less']
})
export class AnswerOptionComponent implements OnInit {

  answerOptionForm!: FormGroup;
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  minLengthErrorMessage = ValidationMessage.minLength;
  checked: boolean = false;

  constructor(private formBuilder: FormBuilder) {

    this.answerOptionForm = this.formBuilder.group({
      commonForm: this.formBuilder.group({
        question: new FormControl(null, [Validators.required, Validators.minLength(10)]),
        description: new FormControl(),
        explanation: new FormControl()
      }),
      fileForm: this.formBuilder.group({
        file: new FormControl()
      }),
      options: this.formBuilder.array([this.createOption(), this.createOption()]),
    })
  }

  ngOnInit(): void {
  }

  get options(): FormArray {
    return this.answerOptionForm.get("options") as FormArray;
  }

  public createOption(): FormGroup {
    return this.formBuilder.group({
      answer: ['', Validators.required],
      isCorrectOption: [false]
    });
  }

  public addOption() {
    this.options.push(this.createOption());
  }

  public deleteOption(optIdx: number) {
    this.options.removeAt(optIdx);
  }

  submit() {
    console.log(this.answerOptionForm.value);
  }


}
