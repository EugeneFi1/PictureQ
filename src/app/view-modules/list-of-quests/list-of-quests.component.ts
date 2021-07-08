import { Component, OnInit } from '@angular/core';
import {Quest} from '../../models/quest';


@Component({
  selector: 'app-list-of-quests',
  templateUrl: './list-of-quests.component.html',
  styleUrls: ['./list-of-quests.component.css']
})
export class ListOfQuestsComponent implements OnInit {
  quests: Quest[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
