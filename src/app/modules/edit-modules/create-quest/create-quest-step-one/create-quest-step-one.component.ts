import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ValidationMessage} from "../../../../models/labels/validation.message";
import {Store} from "@ngrx/store";
import {CreateQuestState} from "../../../../store/reducer/create-quest.reducer";
import {Location} from "@angular/common";
import {Title} from "@angular/platform-browser";
import {ValidFile} from "../../../../components/file-uploader/file-uploader.component";
import {options} from "../../../../util/quest-option";

@Component({
  selector: 'app-create-quest-step-one',
  templateUrl: './create-quest-step-one.component.html',
  styleUrls: ['./create-quest-step-one.component.less']
})
export class CreateQuestStepOneComponent implements OnInit {

  @Input() firstStepForm!: FormGroup;
  selectedFile?: File;
  imgUrl?: string | ArrayBuffer | null;
  options = options;
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  isHeavier?: boolean= false;
  isLoading: boolean = false;
  selectOption = this.options[1];


  constructor(private store: Store<CreateQuestState>,
              private location: Location,
              private titleService: Title,
  ) {
      this.titleService.setTitle('Create quest');
  }

  ngOnInit(): void {
    console.log(this.options[1])
  }

  public back(): void {
    this.location.back();
  }

  public getFile(validFile: ValidFile) {
    this.selectedFile = validFile.selectedFile;
    this.imgUrl = validFile.imgUrl;
    this.isHeavier = validFile.isHeavier;
  }

}
