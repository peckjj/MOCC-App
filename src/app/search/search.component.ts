import { Component, OnInit } from '@angular/core';
import { IBusiness } from 'src/models/IBusiness';
import { HttpService } from '../http.service';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonHarness} from '@angular/material/button/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchResults: IBusiness[] = [];
  
  notIncluded: string[] = [
    "id",
    "status",
    "birthday",
    "rating",
    "mission_statment",
    "password",
    "ownership"
  ];
  
  business: string = "";

  constructor(private http: HttpService) { 

   }


  ngOnInit(): void {

  }

  search() {
    this.http.searchByBusinessName(this.business).then(data => this.searchResults= data);
  }

  getIncluded(title: IBusiness): string[] {
    return Object.keys(title).filter( (data)=> !this.notIncluded.includes(data) );
  }

}
