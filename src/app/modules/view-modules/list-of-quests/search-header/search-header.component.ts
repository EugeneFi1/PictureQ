import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.less']
})
export class SearchHeaderComponent implements OnInit {

  @Output() sendValue : EventEmitter <number> = new EventEmitter<number>();
  searchText: any;

  constructor() { }

  ngOnInit(): void {

  }


  sendInputValue(value: any) {
    this.sendValue.emit(value);
  }
}
