import { Component, OnInit } from '@angular/core';
import {ValidationMessage} from '../../../models/labels/validation.message';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {RegExp} from '../../../models/reg-exp/reg-exp';
import {ValidFile} from '../../../components/file-uploader/file-uploader.component';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.less']
})
export class CreatePageComponent implements OnInit {

  form!: FormGroup;
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  isHeavier: boolean | undefined = false;
  selectedFile: File | undefined;
  imgUrl: string | ArrayBuffer | null | undefined;
  img: any = 'https://drive.google.com/file/d/1XNfqhqQo46_s_IwDgWGzvl9r_iGNsH5V/view?usp=sharing';

  constructor(private location: Location,
              private titleService: Title,
              private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.createPageForm()
  }


  public createPageForm(): FormGroup{
    return this.formBuilder.group({
      title: new FormControl(null,[Validators.required, Validators.pattern(RegExp.nameRegExp)]),
      description: new FormControl(null),
      explanation: new FormControl(null)
    })
  }

  public getFile(validFile: ValidFile) {
    this.selectedFile = validFile.selectedFile;
    this.imgUrl = validFile.imgUrl;
    this.isHeavier = validFile.isHeavier;
  }

  public back(): void {
    this.location.back();
  }

  submit() {

  }
}
