import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../../models/customer';
import {CustomerState} from '../store/reducer/customer.reducer';
import {Store, select} from '@ngrx/store';
import {selectCustomers} from '../store/selector/customer.selectors';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.less']
})
export class CustomerViewComponent implements OnInit {
  customers$: Observable<Customer[]>;
  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }

  ngOnInit(): void {
  }

}
