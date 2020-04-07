import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {People} from '../../models/people/people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  count:number;
  next:string;
  previous:string;
  data: People[];
  dataExample = "Example";
  image_example = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4M_Ld3qE4g20VBURWYOEX2Ans3x91cRmrmw-6l87F8SkXc5gi&usqp=CAU"


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
      this.data = response.results;
    })
  }


}
