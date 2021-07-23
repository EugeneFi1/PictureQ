import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {QuestService} from '../../../services/quest.service';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'app-list-of-quests',
  templateUrl: './list-of-quests.component.html',
  styleUrls: ['./list-of-quests.component.less']
})
export class ListOfQuestsComponent implements OnInit, OnDestroy {
  sub: any;
  quests: any;
  isLoading = false;
  filterValue: any;
  pageOfItems: any;

  constructor(private titleService: Title,
              private questService: QuestService) {
    this.titleService.setTitle('List of quests');
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.sub = this.questService.getListOfQuests()
      .pipe(finalize( () => {
        this.isLoading = false;
      })).subscribe(
      data => {
        this.quests = data;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getValue(data: any): void {
    this.filterValue = data;
  }

  onChangePage(pageOfItems: Array<any>): void {
    this.pageOfItems = pageOfItems;
  }
}
