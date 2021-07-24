import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessage} from "../../../../models/labels/validation.message";
import {ValidFile} from "../../../../components/file-uploader/file-uploader.component";
import {addDivisions} from "../answer-option/answer-option.component";

@Component({
  selector: 'app-match-matches',
  templateUrl: './match-matches.component.html',
  styleUrls: ['./match-matches.component.less']
})
export class MatchMatchesComponent implements OnInit {

  newDivs: addDivisions[] = [1];
  matchMatchesForm!: FormGroup;
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  minLengthErrorMessage = ValidationMessage.min;
  selectedFile?: File;
  imgUrl?: string | ArrayBuffer | null;
  isHeavier?: boolean;
  checked: boolean = false;

  constructor(private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.matchMatchesForm = this.createForm()

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
