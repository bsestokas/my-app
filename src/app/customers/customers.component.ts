import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  newcust: Customer = {firstname: '', lastname: ''}
  customers: Customer[] = [
    { firstname: 'Ryan', lastname: 'Stiles' },
    { firstname: 'Colin', lastname: 'Mochrie' },
    { firstname: 'Wayne', lastname: 'Brady' },
    { firstname: 'Greg', lastname: 'Proops' },
    { firstname: 'Kathy', lastname: 'Greenwood' },
    { firstname: 'Luara', lastname: 'Hall' }
  ];

  addCustomer(){
    this.customers.push({firstname: this.newcust.firstname, lastname: this.newcust.lastname});
    this.newcust.firstname = '';
    this.newcust.lastname = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
