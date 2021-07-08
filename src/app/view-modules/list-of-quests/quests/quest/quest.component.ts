import {Component, Input, OnInit} from '@angular/core';
import {Quest} from '../../../../models/quest';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  @Input() quest: Quest | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
