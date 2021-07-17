import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Quest} from '../../../../models/quest';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.less']
})
export class QuestsComponent implements OnInit {



  @Input() value: any;
  @Input() page: any;
  @Input() quests: any;

  finalLength: any

  constructor() { }

  ngOnInit(): void {

  }


}
