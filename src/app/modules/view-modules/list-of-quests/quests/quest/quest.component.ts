import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.less']
})
export class QuestComponent implements OnInit {

  @Input() quest:  any;

  constructor() { }

  ngOnInit(): void {

  }



}
