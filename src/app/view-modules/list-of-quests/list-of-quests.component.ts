import { Component, OnInit } from '@angular/core';
import {Quest} from '../../models/quest';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-list-of-quests',
  templateUrl: './list-of-quests.component.html',
  styleUrls: ['./list-of-quests.component.less']
})
export class ListOfQuestsComponent implements OnInit {
  quests: Quest[] | undefined;

  constructor(private titleService: Title) {
    this.titleService.setTitle('List of quests');
  }

  ngOnInit(): void {
  }

}
