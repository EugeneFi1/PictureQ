import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Quest} from '../../models/quest';
import {select, Store} from '@ngrx/store';
import {CreateQuestState} from '../../store/reducer/create-quest.reducer';
import {addQuest} from '../../store/action/create-quest.actions';
import {Observable} from 'rxjs';
import {selectQuest} from '../../store/selector/create-quest.selectors';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-quest',
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.css']
})
export class CreateQuestComponent implements OnInit {
  // @ts-ignore
  quest: Quest;
  quest$: Observable<Quest>;
  createQuest = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    explanation: new FormControl(false),
    replyStrategy: new FormControl(),
    showStrategy: new FormControl(),
    picture: new FormControl()
  });

  constructor(private store: Store<CreateQuestState>, private location: Location) {
    this.quest$ = this.store.pipe(select(selectQuest));
  }

  ngOnInit(): void {
    this.quest$.subscribe(data => this.quest = data);
  }

  back(): void {
    this.location.back();
  }

  saveQuest(customerData: any): void {
    console.log(customerData);
    const quest = new Quest();
    quest.name = customerData.name;
    quest.description = customerData.description;
    quest.explanation = customerData.explanation;
    quest.replyStrategy = customerData.replyStrategy;
    quest.showStrategy = customerData.showStrategy;
    this.store.dispatch(addQuest(quest));
  }
}
