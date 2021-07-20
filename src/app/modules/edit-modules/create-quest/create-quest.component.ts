import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestClass} from '../../../models/api/questClass';
import {select, Store} from '@ngrx/store';
import {CreateQuestState} from '../../../store/reducer/create-quest.reducer';
import {addQuest} from '../../../store/action/create-quest.actions';
import {Observable} from 'rxjs';
import {selectQuest} from '../../../store/selector/create-quest.selectors';
import {Location} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {ValidFile} from '../../../components/file-uploader/file-uploader.component';
import {ValidationMessage} from '../../../models/labels/validation.message';

@Component({
  selector: 'app-create-quest',
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.less']
})
export class CreateQuestComponent implements OnInit {

  quest?: QuestClass;
  quest$: Observable<QuestClass>;
  form!: FormGroup;
  // createQuest = new FormGroup({
  //   name: new FormControl(''),
  //   description: new FormControl(''),
  //   explanation: new FormControl(false),
  //   replyStrategy: new FormControl(),
  //   showStrategy: new FormControl(),
  //   picture: new FormControl()
  // });
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

  constructor(private store: Store<CreateQuestState>,
              private location: Location,
              private titleService: Title,
              private formBuilder: FormBuilder,
  ) {
    this.quest$ = this.store.pipe(select(selectQuest));
    this.titleService.setTitle('Create quest');
  }

  ngOnInit(): void {
    this.isLoading = true;
    // this.quest$.subscribe(data => this.quest = data);
    this.form = this.createQuestForm()
    this.isLoading = false
  }

  back(): void {
    this.location.back();
  }

  // saveQuest(customerData: any): void {
  //   const quest = new QuestClass();
  //   quest.name = customerData.name;
  //   quest.description = customerData.description;
  //   quest.explanation = customerData.explanation;
  //   quest.replyStrategy = customerData.replyStrategy;
  //   quest.showStrategy = customerData.showStrategy;
  //   this.store.dispatch(addQuest(quest));
  // }
  selectOption?: string;
  orderDisplayOption?: string;

  public getFile(validFile: ValidFile) {
    this.selectedFile = validFile.selectedFile;
    this.imgUrl = validFile.imgUrl;
    this.isHeavier = validFile.isHeavier;
  }

  public createQuestForm(): FormGroup{
    return this.formBuilder.group({
      name: new FormControl(null,[Validators.required, Validators.pattern(questNameRegExp)]),
      description: new FormControl(null),
      explanation: new FormControl(null),
      replyStrategy: new FormControl([Validators.required]),
      showStrategy: new FormControl([Validators.required]),
      fileForm: this.formBuilder.group({
        file: new FormControl(null,[Validators.required])
      })
    })
  }

  submit() {
    console.log(this.form.value)
  }
}

const questNameRegExp = "^[^\\d\\s]{2}[\\w\\s]{0,20}$";
