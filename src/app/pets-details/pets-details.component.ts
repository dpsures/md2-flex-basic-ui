import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets-details',
  templateUrl: './pets-details.component.html',
  styleUrls: ['./pets-details.component.css']
})
export class PetsDetailsComponent implements OnInit {

  data = [
    {name : "Suresh", email : "suresh@gmail.com", age : "31", city : "erode"},
    {name : "Kumar", email : "kumar@gmail.com", age : "31", city : "chennai"},
    {name : "Kamal", email : "kamal@gmail.com", age : "31", city : "erode"},
    {name : "Lokesh", email : "lokesh@gmail.com", age : "31", city : "chennai"},
    {name : "Bala", email : "bala@gmail.com", age : "31", city : "erode"},
    {name : "Senthil", email : "senthil@gmail.com", age : "31", city : "erode"},
    {name : "Sri Ram", email : "sriram@gmail.com", age : "31", city : "chennai"},
    {name : "Hari", email : "hari@gmail.com", age : "31", city : "chennai"},
    {name : "Sakthi", email : "sakthi@gmail.com", age : "31", city : "salem"},
    {name : "Subash", email : "subash@gmail.com", age : "31", city : "erode"},
    {name : "Sasi", email : "sasi@gmail.com", age : "31", city : "chennai"},
    {name : "Saravanan", email : "saran@gmail.com", age : "31", city : "kovai"},
    {name : "Mahesh", email : "mahesh@gmail.com", age : "31", city : "chennai"},
    {name : "John", email : "john@gmail.com", age : "31", city : "salem"},
    {name : "Mike", email : "mike@gmail.com", age : "31", city : "chennai"},
  ];
  search: string = null;

  constructor() { }

  ngOnInit() {
  }

}
