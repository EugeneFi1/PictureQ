import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestClass} from '../../../models/api/questClass';
import {select, Store} from '@ngrx/store';
import {CreateQuestState} from '../../../store/reducer/create-quest.reducer';
import {Observable} from 'rxjs';
import {selectQuest} from '../../../store/selector/create-quest.selectors';
import {Location} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {ValidFile} from '../../../components/file-uploader/file-uploader.component';
import {ValidationMessage} from '../../../models/labels/validation.message';
import {options, orderOption} from '../../../utils/quest-options';
import {questNameRegExp} from '../../../utils/reg-exp';

@Component({
  selector: 'app-create-quest',
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.less']
})
export class CreateQuestComponent implements OnInit {

  constructor(private store: Store<CreateQuestState>,
              private location: Location,
              private titleService: Title,
              private formBuilder: FormBuilder,
  ) {
    this.quest$ = this.store.pipe(select(selectQuest));
    this.titleService.setTitle('Create quest');
  }

  quest?: QuestClass;
  quest$: Observable<QuestClass>;
  form!: FormGroup;
  selectedFile: File | undefined;
  imgUrl: string | ArrayBuffer | null | undefined;
  options: string[] = options;
  orderOption: string[] = orderOption;
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  isHeavier: boolean | undefined = false;
  selectOption?: string;
  orderDisplayOption?: string;

  ngOnInit(): void {
    this.form = this.createQuestForm();
  }

  back(): void {
    this.location.back();
  }

  public getFile(validFile: ValidFile): void {
    this.selectedFile = validFile.selectedFile;
    this.imgUrl = validFile.imgUrl;
    this.isHeavier = validFile.isHeavier;
  }

  public createQuestForm(): FormGroup{
    return this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.pattern(questNameRegExp)]),
      description: new FormControl(null),
      explanation: new FormControl(null),
      replyStrategy: new FormControl([Validators.required]),
      showStrategy: new FormControl([Validators.required]),
      fileForm: this.formBuilder.group({
        file: new FormControl(null, [Validators.required])
      })
    });
  }

  submit(): void {
    console.log(this.form.value);
  }
}

