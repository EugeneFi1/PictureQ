import {Component, Input, OnInit} from '@angular/core';
import {QuestClass} from "../../../../models/api/questClass";
import {Observable} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessage} from "../../../../models/labels/validation.message";
import {select, Store} from "@ngrx/store";
import {CreateQuestState} from "../../../../store/reducer/create-quest.reducer";
import {Location} from "@angular/common";
import {Title} from "@angular/platform-browser";
import {selectQuest} from "../../../../store/selector/create-quest.selectors";
import {ValidFile} from "../../../../components/file-uploader/file-uploader.component";
import {RegExp} from "../../../../models/reg-exp/reg-exp";

@Component({
  selector: 'app-create-quest-step-one',
  templateUrl: './create-quest-step-one.component.html',
  styleUrls: ['./create-quest-step-one.component.less']
})
export class CreateQuestStepOneComponent implements OnInit {


  @Input() firstStepForm!: FormGroup;

  quest?: QuestClass;
  selectedFile: File | undefined;
  imgUrl: string | ArrayBuffer | null | undefined;
  options: string[] = [
    'don`t show',
    'show answer at the end',
    'show answer after user response',
    'show answer immediately'
  ]
  orderOption: string[] = [
    'show sequentially',
    'show in reverse order',
    'show everything in random order'
  ]
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  isHeavier: boolean | undefined = false;
  isLoading: boolean = false;
  selectOption?: string;
  orderDisplayOption?: string;

  constructor(private store: Store<CreateQuestState>,
              private location: Location,
              private titleService: Title,
              private formBuilder: FormBuilder,
  ) {
      this.titleService.setTitle('Create quest');
  }

  ngOnInit(): void {

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
