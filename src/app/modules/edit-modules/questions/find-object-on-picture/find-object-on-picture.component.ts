import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessage} from "../../../../models/labels/validation.message";
import {ValidFile} from "../../../../components/file-uploader/file-uploader.component";
import {MatDialog} from "@angular/material/dialog";
import {ChoosePictureDialogComponent} from "./choose-picture-dialog/choose-picture-dialog.component";

@Component({
  selector: 'app-find-object-on-picture',
  templateUrl: './find-object-on-picture.component.html',
  styleUrls: ['./find-object-on-picture.component.less']
})
export class FindObjectOnPictureComponent implements OnInit {

  findObjectForm!: FormGroup;
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  minLengthErrorMessage = ValidationMessage.min;
  selectedFile: File | undefined;
  imgUrl: string | ArrayBuffer | null | undefined;
  isHeavier?: boolean;
  checked: boolean = false;

  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findObjectForm = this.createForm()

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


  openImg() {
    let dialogRef = this.dialog.open(ChoosePictureDialogComponent,{
        width: '100%',
        height: '95%',
        data: this.imgUrl
      });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.savePoints();
      } else if(!result){
        this.dialog.closeAll();
      }

    })
  }

  public savePoints() {
    console.log('I work')
  }
}
