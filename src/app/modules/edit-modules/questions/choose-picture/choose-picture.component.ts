import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationMessage} from '../../../../models/labels/validation.message';
import {ValidFile} from '../../../../components/file-uploader/file-uploader.component';

@Component({
  selector: 'app-choose-picture',
  templateUrl: './choose-picture.component.html',
  styleUrls: ['./choose-picture.component.less']
})
export class ChoosePictureComponent implements OnInit {

  choosePictureForm!: FormGroup;
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  minLengthErrorMessage = ValidationMessage.minLength;


  constructor(private formBuilder: FormBuilder
  ) {
    this.choosePictureForm = this.formBuilder.group({
      commonForm: this.formBuilder.group({
        question: new FormControl('', [
          Validators.required,
          Validators.minLength(10)
        ]),
        description: new FormControl(),
        explanation: new FormControl()
      }),
      options: this.formBuilder.array([this.createOption(), this.createOption()]),
    });
  }

  ngOnInit(): void {
  }

  options(): any {
    return this.choosePictureForm.controls.options as FormGroup;
  }

  createOption(): FormGroup {
    return this.formBuilder.group({
      isCorrectOption: new FormControl(false),
      fileForm: this.formBuilder.group({
        file: new FormControl(null, [Validators.required])
      }),
    });
  }



  addOption(): void {
    this.options().push(this.createOption());
  }

  deleteOption(optIdx: number): void {
    this.options().removeAt(optIdx);
  }

  submit(): void {
    console.log(this.choosePictureForm.value);
  }

}
