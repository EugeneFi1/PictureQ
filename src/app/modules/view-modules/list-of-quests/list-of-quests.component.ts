import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {QuestService} from '../../../services/quest.service';
import {finalize} from 'rxjs/operators';
import {Quest} from '../../../models/api/quest';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-list-of-quests',
  templateUrl: './list-of-quests.component.html',
  styleUrls: ['./list-of-quests.component.less']
})
export class ListOfQuestsComponent implements OnInit, OnDestroy {

  questSubsc?: Subscription;
  quests!: Quest[];
  isLoading = false;
  filterValue!: string;
  pageOfItems: any;

  constructor(private titleService: Title,
              private questService: QuestService) {
    this.titleService.setTitle('List of quests');

  }

  ngOnInit(): void {
    this.isLoading = true;
    this.questSubsc = this.questService.getListOfQuests()
      .pipe(finalize( () => {
        this.isLoading = false;
      })).subscribe(
        data => {
          this.quests = data;
        })
  }

  ngOnDestroy(): void {
    if(this.questSubsc)
      this.questSubsc.unsubscribe()
  }


  getValue(data: any) {
    this.filterValue = data;
  }


  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
