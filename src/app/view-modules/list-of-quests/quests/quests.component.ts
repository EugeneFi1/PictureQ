import {Component, Input, OnInit} from '@angular/core';
import {Quest} from '../../../models/quest';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent implements OnInit {

  @Input() quests: Quest[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
