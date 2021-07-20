import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.less']
})
export class SearchHeaderComponent implements OnInit {

  @Output() sendValue : EventEmitter <number> = new EventEmitter<number>();
  searchText?: string;

  constructor() { }

  ngOnInit(): void {

  }


  sendInputValue(value: any) {
    this.sendValue.emit(value);
  }
}
