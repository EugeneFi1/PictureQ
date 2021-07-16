import { Component, OnInit } from '@angular/core';

import {Title} from '@angular/platform-browser';
import {Quest} from '../../../models/quest';
import {QuestService} from '../../../services/quest.service';
import {Store} from '@ngrx/store';
import {State} from '../../../reducers';
import {Observable} from 'rxjs';
import {getAllQuests} from '../../../store/selector/create-quest.selectors';


@Component({
  selector: 'app-list-of-quests',
  templateUrl: './list-of-quests.component.html',
  styleUrls: ['./list-of-quests.component.less']
})
export class ListOfQuestsComponent implements OnInit {
  // quests: Quest[] | undefined ;

  quests$: Observable<Quest[]> | undefined;

  constructor(private titleService: Title,
              private questService: QuestService,
              private store: Store<State>) {
    this.titleService.setTitle('List of quests');
  }

  ngOnInit(): void {
    this.quests$ = this.store.select(getAllQuests)
  }

}
