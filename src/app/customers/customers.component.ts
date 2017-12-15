import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CUSTOMERS } from '../mock-customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers = CUSTOMERS;
  constructor() { }

  ngOnInit() {
  }

}