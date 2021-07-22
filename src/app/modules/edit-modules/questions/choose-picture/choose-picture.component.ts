import { Component, OnInit } from '@angular/core';
import {addDivisions} from "../answer-option/answer-option.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessage} from "../../../../models/labels/validation.message";
import {ValidFile} from "../../../../components/file-uploader/file-uploader.component";

@Component({
  selector: 'app-choose-picture',
  templateUrl: './choose-picture.component.html',
  styleUrls: ['./choose-picture.component.less']
})
export class ChoosePictureComponent implements OnInit {

  newDivs: addDivisions[] = [1];
  form!: FormGroup;
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  minLengthErrorMessage = ValidationMessage.min;
  private selectedFile: File | undefined;
  private imgUrl: string | ArrayBuffer | null | undefined;
  private isHeavier?: boolean;
  checked: boolean = false;

  constructor(private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.createForm()

  }

  public createForm(): FormGroup{
    return this.formBuilder.group({
      question: new FormControl(null,[
        Validators.required,
        // Validators.minLength(10)
      ]),
      description: new FormControl(null),
      explanation: new FormControl(null),
      answer: new FormControl(null, [Validators.required]),
      fileForm: this.formBuilder.group({
        file: new FormControl(null,[Validators.required])
      })
    })
  }

  public getFile(validFile: ValidFile) {
    this.selectedFile = validFile.selectedFile;
    this.imgUrl = validFile.imgUrl;
    this.isHeavier = validFile.isHeavier;
  }

  addNewDiv() {
    this.newDivs.push(new addDivisions())

  }

  removeNewDiv(idx: number) {
    this.newDivs.splice(idx, 1)
  }

}
