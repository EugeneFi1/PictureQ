import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessage} from "../../../../models/labels/validation.message";
import {ValidFile} from "../../../../components/file-uploader/file-uploader.component";
import {MatDialog} from "@angular/material/dialog";
import {FindObjectDialogComponent} from "./find-object-dialog/find-object-dialog.component";

@Component({
  selector: 'app-find-object-on-picture',
  templateUrl: './find-object-on-picture.component.html',
  styleUrls: ['./find-object-on-picture.component.less']
})
export class FindObjectOnPictureComponent implements OnInit {

  findObjectForm!: FormGroup;
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  minLengthErrorMessage = ValidationMessage.minLength;
  selectedFile: File | undefined;
  imgUrl: string | ArrayBuffer | null | undefined;
  checked: boolean = false;

  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.findObjectForm = this.createForm();
  }

  public createForm(): FormGroup {
    return this.formBuilder.group({
      commonForm: this.formBuilder.group({
        question: new FormControl('', [Validators.required, Validators.minLength(10)]),
        description: new FormControl(),
        explanation: new FormControl()
      }),
      fileForm: this.formBuilder.group({
        file: new FormControl()
      })
    });
  }

  public openImg() {
    let dialogRef = this.dialog.open(FindObjectDialogComponent, {
      width: '100%',
      height: '95%',
      data: this.imgUrl
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.savePoints();
      } else if (!result) {
        this.dialog.closeAll();
      }

    })
  }

  public savePoints() {
//todo: write logic for saving points
  }


  getFile(validFile: ValidFile) {
    this.imgUrl = validFile.imgUrl;
  }
}
