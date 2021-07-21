import {Component, Input, OnInit} from '@angular/core';
import {Quest} from '../../../../models/api/quest';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.less']
})
export class QuestsComponent implements OnInit {



  @Input() value!: string;
  @Input() page: any;
  @Input() quests!: Quest[];

  constructor() { }

  ngOnInit(): void {

  }


}
