import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {People} from '../models/people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  count:number;
  next:string;
  previous:string;
  peoples: People[];

  constructor(private apiService: ApiService){
  }

  ngOnInit() {
    this.getAllPeople()
  }

  public getAllPeople() {
    this.apiService.getAllPeople().subscribe(response => {
      this.count = response.count;
      this.next = response.next;
      this.previous = response.previous;
      this.peoples = response.results;
    })
  }


}
