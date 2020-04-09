import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { People } from '../../models/people/people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  count: number;
  next: string;
  previous: string;
  data: People[];
  select_data: People;
  image_example = "https://wipy.tv/wp-content/uploads/2020/03/lightsaber-de-luke-skywalker.jpg"


  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getAllPeople()
  }

  public getAllPeople() {
    this.apiService.getAllPeople().subscribe(response => {
      this.count = response.count;
      this.next = response.next;
      this.previous = response.previous;
      this.data = response.results;
      this.select_data = this.data[0];
    })
  }

  public getNextPeople() {
    if (this.next != null) {
      this.apiService.getAllPeople(this.next).subscribe(response => {
        this.count = response.count;
        this.next = response.next;
        this.previous = response.previous;
        this.data = response.results;
        this.select_data = this.data[0];
      })
    }
  }

  public getPreviousPeople() {
    if (this.next != null) {
      this.apiService.getAllPeople(this.previous).subscribe(response => {
        this.count = response.count;
        this.next = response.next;
        this.previous = response.previous;
        this.data = response.results;
        this.select_data = this.data[0];
      })
    }
  }

  public select(selected: People){
    this.select_data = selected;
  }


}
