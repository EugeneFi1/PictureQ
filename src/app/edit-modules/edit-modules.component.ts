import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {CreateQuestState} from '../store/reducer/create-quest.reducer';
import {Quest} from '../models/quest';
import {Observable} from 'rxjs';
import {selectQuest} from '../store/selector/create-quest.selectors';

@Component({
  selector: 'app-edit-modules',
  templateUrl: './edit-modules.component.html',
  styleUrls: ['./edit-modules.component.less']
})
export class EditModulesComponent implements OnInit {
  // @ts-ignore
  quest: Quest;
  quest$: Observable<Quest>;

  constructor(private store: Store<CreateQuestState>) {
    this.quest$ = this.store.pipe(select(selectQuest));
  }

  ngOnInit(): void {
    this.quest$.subscribe(data => this.quest = data);
  }

}
